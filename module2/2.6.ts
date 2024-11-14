{
    // constraints  in ts
    

    const addCourseToStudent = <T extends {id:number; name: string; email: string}>(student: T) => {
        const course = "next level web development";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 1,
        name: "dipu",
        email: "gm@dipu",
        devType: "NLWD",
    })
    const student2 = addCourseToStudent({
        id: 2,
        name: "dipu",
        email: "gm@dipu",
        hasWatch: "NLWD",
    })









    //
}

