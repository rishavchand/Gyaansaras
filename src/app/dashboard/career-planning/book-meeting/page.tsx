import Calendy from "@/app/component/Calendy";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-semibold text-teal-600 mb-6">
        Schedule an Appointment
      </h1>
      <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg overflow-auto">
        <div className="relative h-[calc(100vh-8rem)]"> {/* Adjust the height based on your needs */}
          <Calendy url="https://calendly.com/rishavchand1022/counselling" />
        </div>
      </div>
    </div>
  );
}
