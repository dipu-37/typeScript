{
    // conditional type 

    type sheikh = {
        bike: string;
        car: string;
    }

    type checkVehicle <T> = T extends keyof sheikh ? true : false   ;

    type HasPlane = checkVehicle<"plane">





    //
}