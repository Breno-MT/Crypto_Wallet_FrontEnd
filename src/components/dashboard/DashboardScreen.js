import { appName, appVersion } from "@/utils/globals";
import { translateCaption } from "@/i18n";


export default function DashboardScreen() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded max-w-4xl w-full overflow-hidden">
      <p className="text-black">{translateCaption("dashboard.title")}</p>
    </div>
  );
}
