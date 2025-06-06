import { AddressForm } from "@/app/components/cart/AddressForm";
import { Navbar } from "@/app/components/navbar/Navbar";

export default function () {
  return (
    <>
      <Navbar />
      <div className="p-24">
        <AddressForm />
      </div>
    </>
  );
}
