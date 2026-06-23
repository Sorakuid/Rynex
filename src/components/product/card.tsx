import { ArrowRight, Download, Star } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="glass border-border hover:border-primary/50 hover-glow overflow-hidden transition-all duration-300">
        {/* Thumbnail */}
        <div className="bg-muted relative h-48 overflow-hidden">
          {product.image || product.thumbnailUrl ? (
            <img
              src={product.image || product.thumbnailUrl}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="from-primary/20 to-primary/5 flex h-full w-full items-center justify-center bg-gradient-to-br">
              <span className="text-4xl">📦</span>
            </div>
          )}
          {product.isFeatured && (
            <div className="absolute top-3 right-3">
              <Badge variant="default" className="bg-primary/90">
                <Star className="mr-1 h-3 w-3" />
                Featured
              </Badge>
            </div>
          )}
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="group-hover:text-primary line-clamp-1 text-lg transition-colors">
                {product.title}
              </CardTitle>
              <CardDescription className="mt-2 line-clamp-2 text-sm">
                {product.shortDescription || product.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {product.category && (
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
              )}
              {product.price > 0 ? (
                <span className="gradient-text text-lg font-bold">
                  ${product.price}
                </span>
              ) : (
                <span className="text-sm font-medium text-green-500">Free</span>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          {product.techStack && product.techStack.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1">
              {product.techStack.slice(0, 3).map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-primary/30 text-xs"
                >
                  {tech}
                </Badge>
              ))}
              {product.techStack.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{product.techStack.length - 3}
                </Badge>
              )}
            </div>
          )}

          <div className="border-border flex items-center justify-between border-t pt-4">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              {product.downloadCount > 0 && (
                <>
                  <Download className="h-3 w-3" />
                  <span>{product.downloadCount}</span>
                </>
              )}
            </div>
            <ArrowRight className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-all group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
