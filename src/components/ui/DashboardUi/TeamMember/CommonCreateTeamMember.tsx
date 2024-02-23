"use client";

import ZaranBreadCrumb from "@/components/SharedInputFields/ZaranBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import ActionBar from "../../ActionBar";
import Form from "@/components/SharedInputFields/Forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { teamMemberSchema } from "@/schemas/allSchema";
import { message, Row, Col, Button } from "antd";
import FormInput from "@/components/SharedInputFields/Forms/FormInput";
import UploadImage from "@/components/SharedInputFields/UploadImage";
import { useCreateTeamMemberMutation } from "@/redux/api/teamMemberApi";

const CommonCreateTeamMemberPage = () => {
    const {role, adminId} = getUserInfo() as any;
    const router = useRouter();
    const [createTeamMember] = useCreateTeamMemberMutation();

    const createTeamMemberOnSubmit = async (values: any) => {
        message.loading('Adding...');
        const obj = {...values, authorId: adminId};
        const file = obj["file"];
        delete obj["file"];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('data', data);
        try {
            const res = await createTeamMember(formData);
            if(res){
                router.push(`/${role}/team-member-list`);
                message.success('Team member added successfully')
            }
        } catch (error: any) {
            message.error('New team member is not added!!', error.message);
        }
    }
    
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
            <ActionBar title="Add Team Member"/>
            <div style={{margin: '10px'}}>
                <Form
                submitHandler={createTeamMemberOnSubmit}
                resolver={yupResolver(teamMemberSchema)}
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
                  name="name"
                  size="large"
                  label="Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="linkedin"
                  size="large"
                  label="LinkedIn Profile"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="github"
                  size="large"
                  label="Github Profile"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="email"
                  size="large"
                  label="Email Address"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="portfolio"
                  size="large"
                  label="Portfolio Address"
                />
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
            Add Team Member
          </Button>

                </Form>
            </div>
        </div>
    );
};

export default CommonCreateTeamMemberPage;