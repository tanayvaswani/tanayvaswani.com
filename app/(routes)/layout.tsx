import Sidebar from "@/components/sidebar/sidebar";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <div className="md:pl-72 h-full">{children}</div>
    </div>
  );
};

export default RoutesLayout;
