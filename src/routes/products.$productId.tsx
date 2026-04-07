import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: ProductPage,
})

function ProductPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Product</h1>
      <p className="text-muted-foreground">Product details will go here.</p>
    </div>
  )
}
