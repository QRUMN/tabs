export default function DriverDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Driver Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-card rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Active Rides</h2>
          <p className="text-muted-foreground">No active rides</p>
        </div>
        <div className="p-6 bg-card rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Today's Earnings</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-6 bg-card rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Rating</h2>
          <p className="text-2xl font-bold">4.9</p>
        </div>
      </div>
    </div>
  );
}