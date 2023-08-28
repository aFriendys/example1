import { Suspense, StrictMode, lazy } from "react";
import ReactDOM from "react-dom/client";

const LazyTable = lazy(()=> import('./components/Table/Table'))

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <Suspense fallback={<div>'loading table'</div>}>
      <LazyTable columns={5} rows={100}/>
    </Suspense>
  </StrictMode>
);