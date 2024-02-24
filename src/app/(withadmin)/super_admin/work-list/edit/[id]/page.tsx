
import CommonEditWorkPage from "@/components/ui/DashboardUi/Work/CommonEditWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftSync INC | Edit Work",
  description: "Founded by SoftSync INC",
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