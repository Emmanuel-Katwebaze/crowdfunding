import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Fund Your Dreams, Build Your Future
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join thousands of creators and backers in bringing innovative projects to life. Start your campaign today or discover amazing projects to support.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/create-campaign">
                  <Button size="lg" className="gap-2">
                    Start a Campaign <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/campaigns">
                  <Button variant="outline" size="lg">
                    Browse Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Smart Analytics',
                description: 'Track your campaign\'s performance with detailed analytics and insights.',
                icon: TrendingUp,
              },
              {
                name: 'Global Community',
                description: 'Connect with backers and creators from around the world.',
                icon: Users,
              },
              {
                name: 'Quick Setup',
                description: 'Launch your campaign in minutes with our intuitive platform.',
                icon: Zap,
              },
            ].map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}