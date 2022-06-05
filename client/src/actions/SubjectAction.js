
import axios from 'axios'












export const getAllSubject = (year,sem) => async (dispatch) => {
    console.log('action called')
  dispatch({ type: "GET_SUBJECT_REQUEST" });
  try {
    if(!year & !sem){
      console.log("no year and sem")
      year="1"
      sem="1"
    }
    let college="SRM"

    // const data = {
    //   college: "SRM",
    //   year: "1",
    //   sem: "1",
    //   subjects: [
    //     {
    //       name: "Software management and design",
    //       codename: "SEPM",
    //       notes: [
    //         {
    //           title: "Unit 1",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Question bank",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Merged",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 2",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 3",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: "Datastructure and algo design",
    //       codename: "DSA",
    //       notes: [
    //         {
    //           title: "Unit 1",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Question bank",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Merged",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 2",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 3",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: "Computer Communication",
    //       codename: "CC",
    //       notes: [
    //         {
    //           title: "ALL Units",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Question bank",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Merged",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 2",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 3",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // };
    const response = await axios.get(`/api/notes/${college}/${year}?sem=${sem}`)
    console.log(response.data)
    dispatch({ type: "GET_SUBJECT_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SUBJECT_FAILED", payload: error });
    console.log(error);
  }
};
