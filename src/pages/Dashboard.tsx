import { Card } from '@/components/ui/Card';

export function Dashboard() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">My Campaigns</h2>
          </Card.Header>
          <Card.Content>
            <p className="text-gray-500">You haven't created any campaigns yet.</p>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">My Contributions</h2>
          </Card.Header>
          <Card.Content>
            <p className="text-gray-500">You haven't contributed to any campaigns yet.</p>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Analytics</h2>
          </Card.Header>
          <Card.Content>
            <p className="text-gray-500">No analytics data available yet.</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}