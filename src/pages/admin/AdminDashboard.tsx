import { Card } from '@/components/ui/Card';

export function AdminDashboard() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Pending Campaigns</h2>
          </Card.Header>
          <Card.Content>
            <p className="text-gray-500">No pending campaigns to review.</p>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Platform Statistics</h2>
          </Card.Header>
          <Card.Content>
            <p className="text-gray-500">Loading statistics...</p>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">User Management</h2>
          </Card.Header>
          <Card.Content>
            <p className="text-gray-500">No users to display.</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}