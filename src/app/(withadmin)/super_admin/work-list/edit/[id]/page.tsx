
import CommonEditWorkPage from "@/components/ui/DashboardUi/Work/CommonEditWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARaN IT | Edit Work",
  description: "Founded by ZARan-IT",
};

const EditWorkPage = ({params}: any) => {
    const {id} = params;
    

    return (
        <div >
            <CommonEditWorkPage id={id}/>
        </div>
    );
};

export default EditWorkPage;