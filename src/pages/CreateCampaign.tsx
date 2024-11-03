import { useForm } from 'react-hook-form';
import { ImagePlus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

interface CampaignForm {
  title: string;
  description: string;
  goalAmount: number;
  endDate: string;
  category: string;
}

export function CreateCampaign() {
  const { register, handleSubmit, formState: { errors } } = useForm<CampaignForm>();

  const onSubmit = async (data: CampaignForm) => {
    // TODO: Implement campaign creation logic
    console.log('Campaign data:', data);
  };

  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Create Your Campaign</h1>
        <p className="mt-2 text-gray-600">Share your project with the world and start raising funds.</p>
      </div>

      <Card>
        <Card.Content>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Campaign Image */}
            <div className="flex justify-center">
              <div className="relative flex h-40 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                <div className="text-center">
                  <ImagePlus className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Upload campaign image</p>
                  <p className="mt-1 text-xs text-gray-400">PNG, JPG up to 5MB</p>
                </div>
                <input type="file" className="absolute inset-0 opacity-0" accept="image/*" />
              </div>
            </div>

            {/* Campaign Details */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="title">
                  Campaign Title
                </label>
                <Input
                  id="title"
                  {...register('title', { required: 'Title is required' })}
                  error={!!errors.title}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                  {...register('description', { required: 'Description is required' })}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium" htmlFor="goalAmount">
                    Goal Amount ($)
                  </label>
                  <Input
                    id="goalAmount"
                    type="number"
                    min="1"
                    {...register('goalAmount', {
                      required: 'Goal amount is required',
                      min: { value: 1, message: 'Goal must be greater than 0' },
                    })}
                    error={!!errors.goalAmount}
                  />
                  {errors.goalAmount && (
                    <p className="mt-1 text-sm text-red-500">{errors.goalAmount.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="endDate">
                    End Date
                  </label>
                  <Input
                    id="endDate"
                    type="date"
                    {...register('endDate', { required: 'End date is required' })}
                    error={!!errors.endDate}
                  />
                  {errors.endDate && (
                    <p className="mt-1 text-sm text-red-500">{errors.endDate.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  className="mt-1 block w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                  {...register('category', { required: 'Category is required' })}
                >
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="art">Art</option>
                  <option value="environment">Environment</option>
                  <option value="community">Community</option>
                  <option value="education">Education</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Save Draft
              </Button>
              <Button type="submit">
                Submit for Review
              </Button>
            </div>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
}