import Sidebar from "@/components/sidebar/sidebar";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <div className="h-full md:max-w-screen-2xl md:mx-auto">
        <div className="pl-72">{children}</div>
      </div>
    </div>
  );
};

export default RoutesLayout;
