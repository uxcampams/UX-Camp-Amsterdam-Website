import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Sponsorship from "@/pages/Sponsorship";
import RunningASession from "@/pages/RunningASession";
import Prepare from "@/pages/Prepare";
import Year2024 from "@/pages/previous/Year2024";
import Year2023 from "@/pages/previous/Year2023";
import Year2019 from "@/pages/previous/Year2019";
import Year2018 from "@/pages/previous/Year2018";
import Year2017 from "@/pages/previous/Year2017";
import Year2016 from "@/pages/previous/Year2016";
import Year2015 from "@/pages/previous/Year2015";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sponsorship" component={Sponsorship} />
      <Route path="/running-a-session" component={RunningASession} />
      <Route path="/prepare" component={Prepare} />
      <Route path="/previous/2024" component={Year2024} />
      <Route path="/previous/2023" component={Year2023} />
      <Route path="/previous/2019" component={Year2019} />
      <Route path="/previous/2018" component={Year2018} />
      <Route path="/previous/2017" component={Year2017} />
      <Route path="/previous/2016" component={Year2016} />
      <Route path="/previous/2015" component={Year2015} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Navbar />
          <Router />
          <Footer />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
