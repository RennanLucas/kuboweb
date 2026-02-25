import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
          <Check className="h-3 w-3 text-primary" />
        </span>
      ) : (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
          <X className="h-3 w-3 text-muted-foreground" />
        </span>
      )}
      <span className={cn("text-sm", checked ? "text-foreground" : "text-muted-foreground line-through")}>
        {text}
      </span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
  popular?: boolean
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  popular,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={cn(
        "relative overflow-hidden border-border/50 bg-card p-6 md:p-8",
        popular && "border-primary/50 shadow-glow",
        className
      )}>
        {popular && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
            Popular
          </div>
        )}
        <div className="space-y-2 mb-6">
          <p className="text-sm font-medium text-primary">{tier}</p>
          <p className="text-3xl md:text-4xl font-bold text-foreground">{price}</p>
          <p className="text-sm text-muted-foreground">{bestFor}</p>
        </div>

        <div className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>

        <Button className="w-full" variant={popular ? "default" : "outline"} asChild>
          <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
            {CTA}
          </a>
        </Button>
      </Card>
    </motion.div>
  )
}