import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecentSales = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/sellers/01.jpg" alt="Avatar" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ashley Wilson</p>
          <p className="text-sm text-muted-foreground">
            ashleyqilson@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$10,236.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/sellers/02.jpg" alt="Avatar" />
          <AvatarFallback>ED</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Emily Davis</p>
          <p className="text-sm text-muted-foreground">emilydavis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$79.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/sellers/03.jpg" alt="Avatar" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Michael Johnson</p>
          <p className="text-sm text-muted-foreground">
            michaeljohnson@gmail.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$125.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/sellers/04.jpg" alt="Avatar" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jessica Smith</p>
          <p className="text-sm text-muted-foreground">
            jessicasmith@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$120.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/sellers/05.jpg" alt="Avatar" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Christopher Brown</p>
          <p className="text-sm text-muted-foreground">
            christopherbrown@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$25.00</div>
      </div>
    </div>
  );
};

export default RecentSales;
