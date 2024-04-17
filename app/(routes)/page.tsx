import LogsCard from "@/components/logs/logs-card";
import { logs } from "@/components/logs/logs-content";

const HomePage = () => {
  return (
    <div className="px-6 py-12 flex flex-col items-center justify-center w-full">
      {logs.map((log, index) => (
        <LogsCard key={index} {...log} />
      ))}
    </div>
  );
};

export default HomePage;
