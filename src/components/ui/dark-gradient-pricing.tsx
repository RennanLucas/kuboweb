import { motion } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BenefitProps {
  text: string
  checked: boolean
  index: number
}

const Benefit = ({ text, checked, index }: BenefitProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.06, duration: 0.4 }}
      className="flex items-center gap-3"
    >
      {checked ? (
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.06, type: "spring", stiffness: 300 }}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20"
        >
          <Check className="h-3 w-3 text-primary" />
        </motion.span>
      ) : (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
          <X className="h-3 w-3 text-muted-foreground" />
        </span>
      )}
      <span className={cn("text-sm", checked ? "text-foreground" : "text-muted-foreground line-through")}>
        {text}
      </span>
    </motion.div>
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
  index?: number
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  popular,
  index = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <div className={cn(
        "relative overflow-hidden rounded-2xl border p-6 md:p-8 h-full flex flex-col transition-all duration-500",
        popular
          ? "border-primary/40 shadow-glow bg-gradient-to-b from-primary/[0.08] via-card to-card"
          : "border-border/40 bg-gradient-to-b from-card/80 to-card hover:border-primary/25 hover:shadow-glow-sm",
        className
      )}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {popular && (
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3" />
            Popular
          </motion.div>
        )}

        <div className="space-y-2 mb-6 relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + index * 0.1 }}
            className="text-sm font-semibold text-primary tracking-wide"
          >
            {tier}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-foreground">{price}</p>
          </motion.div>
          <p className="text-sm text-muted-foreground leading-relaxed">{bestFor}</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        <div className="space-y-3 mb-8 flex-1 relative">
          {benefits.map((benefit, i) => (
            <Benefit key={i} {...benefit} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <Button
            className={cn(
              "w-full relative overflow-hidden group",
              popular && "shadow-lg shadow-primary/25"
            )}
            variant={popular ? "default" : "outline"}
            size="lg"
            asChild
          >
            <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">{CTA}</span>
              {popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
