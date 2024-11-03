import { useState } from 'react';
import { Search, TrendingUp, Clock, Zap } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/Progress';
import { formatCurrency, calculateProgress } from '@/lib/utils';

// Mock data for demonstration
const MOCK_CAMPAIGNS = [
  {
    id: 1,
    title: 'Eco-Friendly Water Bottle',
    description: 'Revolutionary water bottle made from sustainable materials.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600',
    currentAmount: 15000,
    goalAmount: 20000,
    daysLeft: 15,
    category: 'Environment',
  },
  {
    id: 2,
    title: 'Smart Urban Garden',
    description: 'Automated indoor garden system for urban homes.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600',
    currentAmount: 8000,
    goalAmount: 50000,
    daysLeft: 30,
    category: 'Technology',
  },
];

const FILTERS = [
  { icon: TrendingUp, label: 'Trending' },
  { icon: Clock, label: 'Ending Soon' },
  { icon: Zap, label: 'Just Launched' },
];

export function CampaignBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Trending');

  return (
    <div className="container py-10">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Discover Campaigns</h1>
        <p className="text-gray-600">Support innovative projects and ideas from creators worldwide.</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search campaigns..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {FILTERS.map(({ icon: Icon, label }) => (
            <Button
              key={label}
              variant={activeFilter === label ? 'primary' : 'outline'}
              onClick={() => setActiveFilter(label)}
              className="gap-2"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Campaign Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_CAMPAIGNS.map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="h-48 w-full object-cover"
            />
            <Card.Header>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{campaign.title}</h3>
                  <p className="text-sm text-gray-500">{campaign.category}</p>
                </div>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                  {campaign.daysLeft} days left
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {campaign.description}
              </p>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                <Progress value={calculateProgress(campaign.currentAmount, campaign.goalAmount)} />
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    {formatCurrency(campaign.currentAmount)}
                  </span>
                  <span className="text-gray-500">
                    of {formatCurrency(campaign.goalAmount)}
                  </span>
                </div>
                <Button className="w-full">Contribute Now</Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
}