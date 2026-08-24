"use client";

import { useEffect, useState } from "react";
import {
  categoriesMock,
  instrumentCategoriesMock,
  planOptions,
  coachesMock,
} from "@/types/course";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; // For class merging

type Filters = {
  categoryId: string | null;
  instrumentId: string | null;
  plan: string | null;
  isOnline: boolean;
  coachId: string | null;
};

type Props = {
  onChange: (filters: Filters) => void;
};

export function CourseFilters({ onChange }: Props) {
  const [filters, setFilters] = useState<Filters>({
    categoryId: null,
    instrumentId: null,
    plan: null,
    isOnline: false,
    coachId: null,
  });
  const [search, setSearch] = useState("");
  const [showFilterBtn, setShowFilterBtn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const updateFilter = (field: keyof Filters, value: any) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onChange(newFilters);
  };

  const resetFilters = () => {
    const reset = {
      categoryId: null,
      instrumentId: null,
      plan: null,
      isOnline: false,
      coachId: null,
    };
    setFilters(reset);
    onChange(reset);
  };

  // Scroll listener for floating button
  useEffect(() => {
    const onScroll = () => {
      setShowFilterBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalFilters =
    Object.values(filters).filter((v) => v !== null && v !== false).length;

  return (
    <>
       {/* Mobile View */}
      <div className="flex items-center gap-2 mb-4">
        <Input
          placeholder="Rechercher un cours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>🔍</Button>
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap gap-4 mb-6">
        <Select value={filters.categoryId ?? ""} onValueChange={(val) => updateFilter("categoryId", val)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            {categoriesMock.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.instrumentId ?? ""} onValueChange={(val) => updateFilter("instrumentId", val)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Instrument" />
          </SelectTrigger>
          <SelectContent>
            {instrumentCategoriesMock.map((inst) => (
              <SelectItem key={inst.id} value={inst.id}>{inst.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.plan ?? ""} onValueChange={(val) => updateFilter("plan", val)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Type de plan" />
          </SelectTrigger>
          <SelectContent>
            {planOptions.map((plan) => (
              <SelectItem key={plan.value.toString()} value={plan.value.toString()}>
                {plan.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.coachId ?? ""} onValueChange={(val) => updateFilter("coachId", val)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Coach" />
          </SelectTrigger>
          <SelectContent>
            {coachesMock.map((coach) => (
              <SelectItem key={coach.id} value={coach.id}>{coach.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Checkbox
            id="online"
            checked={filters.isOnline}
            onCheckedChange={(checked) => updateFilter("isOnline", checked === true)}
          />
          <label htmlFor="online" className="text-sm">En ligne uniquement</label>
        </div>

        <Button variant="outline" onClick={resetFilters}>
          ♻️ Réinitialiser
        </Button>
      </div>

      {/* Floating Button */}
      {showFilterBtn && (
        <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
          <DialogTrigger asChild>
            <Button className="fixed bottom-4 right-4 z-50 md:hidden ">🛠️ Modifier les filtres</Button>
          </DialogTrigger>
          <DialogContent className="max-w-xs w-full rounded-xl">
            <DialogHeader>
              <DialogTitle>Filtres</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh] pr-2">
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Catégorie</p>
                  {categoriesMock.map((cat) => (
                    <div key={cat.id} className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.categoryId === cat.id}
                        onCheckedChange={() =>
                          updateFilter("categoryId", filters.categoryId === cat.id ? null : cat.id)
                        }
                      />
                      <span>{cat.name}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-bold">Instrument</p>
                  {instrumentCategoriesMock.map((inst) => (
                    <div key={inst.id} className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.instrumentId === inst.id}
                        onCheckedChange={() =>
                          updateFilter("instrumentId", filters.instrumentId === inst.id ? null : inst.id)
                        }
                      />
                      <span>{inst.name}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-bold">Type de plan</p>
                  {planOptions.map((plan) => (
                    <div key={plan.value.toString()} className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.plan === plan.value.toString()}
                        onCheckedChange={() =>
                          updateFilter("plan", filters.plan === plan.value.toString() ? null : plan.value.toString())
                        }
                      />
                      <span>{plan.label}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-bold">Coach</p>
                  {coachesMock.map((coach) => (
                    <div key={coach.id} className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.coachId === coach.id}
                        onCheckedChange={() =>
                          updateFilter("coachId", filters.coachId === coach.id ? null : coach.id)
                        }
                      />
                      <span>{coach.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="onlineModal"
                    checked={filters.isOnline}
                    onCheckedChange={(checked) => updateFilter("isOnline", checked === true)}
                  />
                  <label htmlFor="onlineModal">En ligne uniquement</label>
                </div>
              </div>
            </ScrollArea>

            <Button className="w-full mt-4" onClick={() => setModalOpen(false)}>
              Afficher les résultats ({totalFilters})
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
