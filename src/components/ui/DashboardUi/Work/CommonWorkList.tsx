'use client';

import { getUserInfo } from "@/services/auth.service";
import ZaranBreadCrumb from "../../../SharedInputFields/ZaranBreadCrumb";
import ActionBar from "../../ActionBar";
import { useDeleteWorkMutation, useGetAllWorkQuery } from "@/redux/api/workApi";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import Link from "next/link";
import { Button, Input, message } from "antd";
import {
  EditOutlined, DeleteOutlined, ReloadOutlined
} from "@ant-design/icons";
import ZaranTable from "@/components/SharedInputFields/ZaranTable";
import ZaranModal from "@/components/SharedInputFields/ZaranModal";
import Image from "next/legacy/image";
import ErrorPage from "@/app/error";


const CommonWorkListPage = () => {
  const query: Record<string, any> = {};
    const { role } = getUserInfo() as any;
    
    const [deleteWork] = useDeleteWorkMutation();

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
    const {data, isLoading, isError} = useGetAllWorkQuery({...query});
    const works = data?.works;
    const meta = data?.meta;
    
    if (isError) {
      return <ErrorPage />;
    }

    const columns = [
      {
        title: 'Image',
        dataIndex: 'workImg',
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
        title: 'Title',
        dataIndex: 'title',
        ellipsis: true,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        ellipsis: true,
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
            <Link href={`/super_admin/work-list/edit/${data}`}>
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

    const deleteWorkHandler = async(id: string) => {
      message.loading('Deleting...');
      try {
        const res = await deleteWork(id);
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
        <ActionBar title="Work List">
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
          dataSource={works}
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
          handleOk={() => deleteWorkHandler(deleteId)}
        >
          <p className="my-5 text-red-500">Are you sure?</p>
        </ZaranModal>
      </div>
    );
};

export default CommonWorkListPage;
