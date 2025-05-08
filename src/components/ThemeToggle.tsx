
import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme, isDark, isSystemTheme, activeTheme } = useTheme();

  // Icon and label based on current active theme (what's actually showing)
  const getActiveIcon = () => {
    if (activeTheme === 'dark') {
      return <Moon className="h-5 w-5 text-primary" />;
    }
    return <Sun className="h-5 w-5 text-primary" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          aria-label="Select theme"
          className={cn(
            "rounded-full relative overflow-hidden",
            "bg-transparent border-primary/20 hover:bg-background hover:border-primary/40",
            "transition-all duration-300"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTheme}
              initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isSystemTheme ? (
                <Monitor className="h-5 w-5 text-primary" />
              ) : (
                getActiveIcon()
              )}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animation-fade-in-up">
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className={cn(
            "cursor-pointer flex items-center gap-2",
            theme === 'light' && "bg-primary/10"
          )}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className={cn(
            "cursor-pointer flex items-center gap-2",
            theme === 'dark' && "bg-primary/10"
          )}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className={cn(
            "cursor-pointer flex items-center gap-2",
            theme === 'system' && "bg-primary/10"
          )}
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;
