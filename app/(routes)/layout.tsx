import Sidebar from "@/components/sidebar/sidebar";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col md:flex-row">
      <div className="flex h-full w-full md:w-72 flex-col md:fixed inset-y-0 md:z-50">
        <Sidebar />
      </div>

      <div className="h-full w-full md:max-w-screen-2xl md:mx-auto">
        <div className="pl-72">{children}</div>
      </div>
    </div>
  );
};

export default RoutesLayout;
