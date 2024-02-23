"use client";

import ZaranBreadCrumb from "@/components/SharedInputFields/ZaranBreadCrumb";
import {
  useGetSingleWorkQuery,
  useUpdateWorkMutation,
} from "@/redux/api/workApi";
import { getUserInfo } from "@/services/auth.service";
import ActionBar from "../../ActionBar";
import Form from "@/components/SharedInputFields/Forms/Form";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import FormInput from "@/components/SharedInputFields/Forms/FormInput";
import FormTextArea from "@/components/SharedInputFields/Forms/FormTextArea";
import Image from "next/legacy/image";

const CommonEditWorkPage = ({ id }: any) => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const { data } = useGetSingleWorkQuery(id);
  const [updateWork] = useUpdateWorkMutation();

  const editWorkOnSubmit = async (values: any) => {
    message.loading("Updating...");
    try {
      const res = await updateWork({ id, body: values });
      if (res) {
        router.push(`/${role}/work-list`);
        message.success("Done");
      }
    } catch (error: any) {
      message.error("Work is not updated", error.message);
    }
  };
  const defaultValues = {
    title: data?.title || "",
    description: data?.description || "",
    workImg: data?.workImg || "",
  };

  return (
    <div style={{ margin: "10px" }}>
      <ZaranBreadCrumb
        items={[ 
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "Work-list",
            link: `/${role}/work-list`,
          },
          
        ]}
      />
      <ActionBar title="Edit Work" />
      <div>
        <Form submitHandler={editWorkOnSubmit} defaultValues={defaultValues}>
          <div
            style={{
              border: "1px solid #002140",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0px",
            }}
          >
            <p className="lg:text-lg md:text-base text-sm mb-2.5">
              Work Information
            </p>

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
                {data && data.workImg ? ( 
                  <Image
                    width={50}
                    height={50}
                    src={data.workImg}
                    alt="avatar"
                  /> 
                ) : (
                  <p style={{color: 'red'}}>No image available</p> 
                )}
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Update Work
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CommonEditWorkPage;
