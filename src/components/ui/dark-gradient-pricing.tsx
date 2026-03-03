import { motion } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BenefitProps {
  text: string
  checked: boolean
  index: number
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
  href?: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
  popular?: boolean
  index?: number
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  href = "https://wa.me/5511932197334",
  benefits,
  className,
  popular,
  index = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <div className={cn(
        "relative overflow-hidden rounded-2xl border p-6 md:p-8 h-full flex flex-col transition-colors duration-300",
        popular
          ? "border-primary/40 shadow-glow bg-gradient-to-b from-primary/[0.08] via-card to-card"
          : "border-border/40 bg-gradient-to-b from-card/80 to-card hover:border-primary/25",
        className
      )}>
        {popular && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Popular
          </div>
        )}

        <div className="space-y-2 mb-6">
          <p className="text-sm font-semibold text-primary tracking-wide">{tier}</p>
          <p className="text-3xl md:text-4xl font-bold text-foreground">{price}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{bestFor}</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        <div className="space-y-3 mb-8 flex-1">
          {benefits.map((benefit, i) => (
            <Benefit key={i} {...benefit} index={i} />
          ))}
        </div>

        <Button
          className={cn(
            "w-full",
            popular && "shadow-lg shadow-primary/25"
          )}
          variant={popular ? "default" : "outline"}
          size="lg"
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {CTA}
          </a>
        </Button>
      </div>
    </motion.div>
  )
}
