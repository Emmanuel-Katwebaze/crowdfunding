import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Rocket } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">CrowdFund</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/campaigns">
              <Button variant="ghost">Browse Campaigns</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link to="/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}