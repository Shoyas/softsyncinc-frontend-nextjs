"use client";

import { useGetSingleTeamMemberQuery, useUpdateTeamMemberMutation } from "@/redux/api/teamMemberApi";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const CommonEditTeamMemberPage = ({id}: any) => {
    const { role } = getUserInfo() as any;
    const router = useRouter();
    const {data} = useGetSingleTeamMemberQuery(id);

    const [updateTeamMember] = useUpdateTeamMemberMutation()


    return (
        <div>
            <h1>Edit Team Member</h1>
        </div>
    );
};

export default CommonEditTeamMemberPage;