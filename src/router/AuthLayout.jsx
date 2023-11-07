import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";



const AuthLayout = () => {

    const outlet = useOutlet();

    const userPromise = useLoaderData();

  return (
    <Suspense>
        <Await
            resolve={userPromise}
            // errorElement={<Alert severity="error">Something went wrong!</Alert>}
            children={(user) => (
              <AuthProvider userData={user}>{outlet}</AuthProvider>
            )}
        />
    </Suspense>
  )
}

export default AuthLayout;