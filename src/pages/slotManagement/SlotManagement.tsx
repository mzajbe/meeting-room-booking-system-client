import CreateSlot from "./CreateSlot";
import SlotsListTable from "./SlotsListTable";

const SlotManagement = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Slots Management</h2>
      <CreateSlot />
      <SlotsListTable />
    </div>
  );
};

export default SlotManagement;
