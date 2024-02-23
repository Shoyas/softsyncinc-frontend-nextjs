'use client'

import ErrorPage from "@/app/error";
import { useDeleteTeamMemberMutation, useGetAllTeamMemberQuery } from "@/redux/api/teamMemberApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import {
  EditOutlined, DeleteOutlined, ReloadOutlined
} from "@ant-design/icons";
import ZaranBreadCrumb from "@/components/SharedInputFields/ZaranBreadCrumb";
import ActionBar from "../../ActionBar";
import ZaranTable from "@/components/SharedInputFields/ZaranTable";
import ZaranModal from "@/components/SharedInputFields/ZaranModal";



const CommonTeamMemberListPage = () => {
    const query: Record<string, any> = {};
    const { role } = getUserInfo() as any;

    const [deleteTeamMember] = useDeleteTeamMemberMutation();

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<string>("");

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    query["searchTerm"] = searchTerm;

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 60,
      });
  
      if(!!debouncedTerm){
        query["searchTerm"] = debouncedTerm;
      }

    const {data, isLoading, isError} = useGetAllTeamMemberQuery({...query});
    const teamMembers = data?.teamMembers;
    const meta = data?.meta;
    
    if(isError){
        return <ErrorPage/>
    }

    const columns = [
        {
          title: 'Member Photo',
          dataIndex: 'teamPersonImg',
          render: function(data: any){
            return (
              <>
                <Image
                  width={50}
                  height={50}
                  src={data}
                  alt="avatar"
                />
              </>
            )
          }
        },
        {
          title: 'Name',
          dataIndex: 'name',
          ellipsis: true,
        },
        {
          title: 'Designation',
          dataIndex: 'designation',
          ellipsis: true,
        },
        {
          title: 'LinkedIn Profile',
          dataIndex: 'linkedin',
          render: function(data: any){
            if(!data){
             return(
                data
             )       
            }
            else{
                return "N/A"
            }
          }
        },
        {
          title: 'Created At',
          dataIndex: 'createdAt',
          render: function(data: any) {
            return data && dayjs(data).format("MMM D, YYYY hh:mm A");
          },
          sorter: true
        },
        {
          title: "Action",
          dataIndex: "id",
          render: function(data: any){
            return(
              <>
              <Link href={`/${role}/team-member-list/edit/${data}`}>
                <Button type="primary" style={{margin: "0px 5px"}}>
                <EditOutlined/>
                </Button>
              </Link>
              <Button type="primary" onClick={() => {
                setOpen(true);
                setDeleteId(data);
              }} style={{margin: "3px"}} danger>
                <DeleteOutlined/>
                </Button>
              </>
            )
          }
        }
        
      ];
  
      const onPaginationChange = (page: number, pageSize: number) => {
        setPage(page);
        setSize(pageSize);
      };
      const onTableChange = (pagination: any, filters: any, sorter: any) => {
        if (sorter && sorter.field) {
          setSortBy(sorter.field);
          setSortOrder(sorter.order === 'ascend' ? 'asc' : 'desc');
        }
      };
  
      const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
      };
  
      const deleteTeamMemberHandler = async(id: string) => {
        message.loading('Deleting...');
        try {
          const res = await deleteTeamMember(id);
          if(res){
            message.success("Work deleted successfully!!!")
            setOpen(false);
          }
        } catch (error: any) {
          message.error("Can't deleted!!!")
        }
      };

    return (
        <div style={{ margin: "10px" }}>
            <ZaranBreadCrumb
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
            },
          ]}
        />
        <ActionBar title="Team Member List">
          <Input
            type="text"
            size="large"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{width: "20%"}}
          />
          <div>
            {(!!sortBy || !!sortOrder || !!searchTerm) && (
              <Button
                type="primary"
                onClick={resetFilters}
                style={{margin: '0px 5px'}}
              >
                <ReloadOutlined/>
              </Button>
            )}
          </div>
        </ActionBar>
        <ZaranTable
          loading={isLoading}
          columns={columns}
          dataSource={teamMembers}
          pageSize={size}
          totalPages={meta?.total}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />

        <ZaranModal
          title="Remove"
          isOpen={open}
          closeModal={() => setOpen(false)}
          handleOk={() => deleteTeamMemberHandler(deleteId)}
        >
          <p className="my-5 text-red-500">Are you sure?</p>
        </ZaranModal>
        </div>
    );
};

export default CommonTeamMemberListPage;