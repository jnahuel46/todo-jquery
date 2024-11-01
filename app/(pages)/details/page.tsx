import {Button} from "@/components/Button";
import CommonCard from "@/components/CommonCard";
import PagesLayout from "@/components/PagesLayout";
import {TitlePage} from "@/components/TitlePage";

export default function DetailsPage() {
    return (
        <PagesLayout>
            <TitlePage title="Mis datos"/>

            <CommonCard>
                <form className="flex flex-col gap-[24px]">
                    <div className="mt-[10px] h-[65px]">
                        <label
                            className="text-customBlack font-open-sans text-14px font-normal leading-19px text-left">
                            Nombre <span className="text-customRed">*</span>
                        </label>
                        <input
                            required
                            className="w-full h-[45px] mt-1 pl-[18px] border border-gray-300 rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="h-[65px]">
                        <label
                            className="text-customBlack font-open-sans text-14px font-normal leading-19px text-left">
                            Email <span className="text-customRed">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full h-[45px] mt-1 pl-[18px] border border-gray-300 rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px"
                            placeholder="Email"
                        />
                    </div>
                    <div className="h-[65px]"><label
                        className="text-customBlack font-open-sans text-14px font-normal leading-19px text-left">
                        Teléfono <span className="text-customRed">*</span>
                    </label>
                        <input
                            type="tel"
                            required
                            className="w-full h-[45px] mt-1 pl-[18px] border border-gray-300 rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px"
                            placeholder="Teléfono"
                        />
                    </div>
                    <div className="mt-[16px] mb-[18px]">
                        <Button title="Guardar"/>
                    </div>
                </form>
            </CommonCard>
        </PagesLayout>
    );
}
