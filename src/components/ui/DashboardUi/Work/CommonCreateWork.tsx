"use client";

import { getUserInfo } from "@/services/auth.service";
import ZaranBreadCrumb from "../../../SharedInputFields/ZaranBreadCrumb";
import ActionBar from "../../ActionBar";
import Form from "@/components/SharedInputFields/Forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { workSchema } from "@/schemas/allSchema";
import { Button, Col, Row, message } from "antd";
import FormInput from "@/components/SharedInputFields/Forms/FormInput";
import FormTextArea from "@/components/SharedInputFields/Forms/FormTextArea";
import UploadImage from "../../../SharedInputFields/UploadImage";
import { useCreateWorkMutation } from "@/redux/api/workApi";
import { useRouter } from "next/navigation";
 
const CommonCreateWorkPage = () => {
  const { role, adminId } = getUserInfo() as any;
  const router = useRouter();
  const [createWork] = useCreateWorkMutation();

  const createWorkOnSubmit = async(values: any) => {
    message.loading('Adding...');
    const obj = {...values, authorId: adminId};
    const file = obj["file"];
    delete obj['file'];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data); 
    
    try {
      const res = await createWork(formData);
      if(res){
        router.push(`/${role}/work-list`);
        message.success('Work added successfully');
      }
    } catch (error: any) {
      message.error('New work is not added!!', error.message)
    }

  };
  return (
    <div>
      <ZaranBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <ActionBar title="Add work" />
      <div style={{ margin: "10px" }}>
        <Form
          submitHandler={createWorkOnSubmit}
          resolver={yupResolver(workSchema)}
        >
          <div
            style={{
              border: "1px double #002140",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="title"
                  size="large"
                  label="Title"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea rows={8} name="description" label="Description" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px", marginTop: "20px" }}
              >
                <UploadImage name="file" />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Add Work
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CommonCreateWorkPage;
