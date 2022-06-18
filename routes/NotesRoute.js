const experss = require("express");
const router = experss.Router();
const notes = require("../models/notesModel");
const collegeDB = require("../models/collegeModel")
const adminAuth = require('../models/adminAuthModel')





router.post("/v4/newdata", async (req, res) => {
  // const data = req.body.data
  const { data } = req.body;
  console.log(data);
  const college = data.college;
  const year = data.year;
  const sem = data.sem;
  const branch = data.branch;
  try {
    const alreadyexist = await notes.find({
      $and: [
        { college: college },
        { year: year },
        { sem: sem },
        { branch: branch },
      ],
    });
    if (alreadyexist.length > 0) {
      console.log("Already in DB ");
      console.log(alreadyexist);
    } else {
      console.log("Need to add new ", data);
      res.send(data);



      const newnotes = new notes({
        college: data.college,
        year: data.year,
        sem: data.sem,
        branch: data.branch,
        subjects: [
          {
            name: data.subjects.name,
            codename: data.subjects.codename,
            notes: [
              {
                title: data.subjects.notes.title,
                material: [
                  {
                    heading: data.subjects.notes.material.heading,
                    link: data.subjects.notes.material.link,
                  },
                ],
              },
            ],
          },
        ],
      });

      newnotes.save();
    }

    const collegeExist = await collegeDB.find({
      college:college
    })
    if(collegeExist.length > 0){
      await collegeDB.updateOne(
        {
          college:college
        },
        {
          $push: {
            "branch": [
              {branchName:branch}
            ],
          }
        }
      ); 
      console.log("College already in DB");
     
   
    }else{
      console.log("adding new college")
      const collegePost =  new collegeDB ({
        college:college,
        branch:[{
          branchName:branch
        }]
      })
      collegePost.save()
    }
  } catch (error) {
    console.log(error);
  }
});







router.post("/populate", async (req, res) => {
  const { data } = req.body;
  //if !noteID (add note) if !subjectid (add subject) else(add material)
  const { dataID, subjectID, noteID, toPost } = data
  try {
    //  await notes.updateOne({
    //     _id: '62a61949dc0f920ae99fc687',
    //     'subjects.notes.notes_id': '221fad-f35c-ee2a-65b3-8531dbfcf732',
    //   },
    //     {$push:{'subjects.0.notes.$.material':
    //     [{ material_id: "hfklahfhoabfoab", heading: "Prime", link: "wwo.prime.com" }]


    if (!subjectID && !noteID) {
      await notes.updateOne(
        {
          _id: dataID,
        },
        {
          $push: {
            "subjects": [
              toPost
            ],
          }
        }
      );
    }
    else if (!noteID) {
      await notes.updateOne(
        {
          _id: dataID,
        },
        {
          $push: {
            "subjects.$[s].notes": [
              toPost
            ],
          }
        },
        {
          arrayFilters: [
            { 's._id': subjectID }
          ],
        },
      );
    }
    else {
      await notes.updateOne(
        {
          _id: dataID,
        },
        {
          $push: {
            "subjects.$[s].notes.$[n].material": [
              toPost
            ],
          }
        },
        {
          arrayFilters: [
            { 's._id': subjectID },
            { 'n._id': noteID }
          ],
        },
      );

    }
    // await notes.updateOne(
    //   {
    //     _id: dataID,
    //   },
    //   {
    //     $push: {
    //       "subjects.$[s].notes.$[n].material": [
    //         toPost
    //       ],
    //     }
    //   },
    //   {
    //     arrayFilters: [
    //       { 's._id': subjectID },
    //       { 'n._id': noteID }
    //     ],
    //   },
    // );





    console.log("posted");
    const alreadyexist = await notes.find({
      $and: [{ year: "3" }, { sem: "2" }],
    });
    res.send(alreadyexist);
    // console.log(updata)
  } catch (error) {
    console.log(error);
  }
});

router.get("/notes/:college/:year", async (req, res) => {
  const college = req.params.college;
  const year = req.params.year;
  let sem = req.query.sem;
  console.log(college, year, sem);
  if (!sem) {
    sem = "1";
  }
  try {
    const note = await notes.find({
      $and: [{ college: college }, { year: year }, { sem: sem }],
    });
    // const note = await notes.find({"_id":'629d024ca83af658df637020'})
    console.log(note);
    res.send(note[0]);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/college", async (req,res)=>{
  try {
    const college = await collegeDB.find()
    console.log(college)
    res.send(college)
  } catch (error) {
    console.log(error)
  }
})



// admin pasword auth
router.get('/auth',async(req,res)=>{
  console.log("server req") 
  try {
    const pass = await adminAuth.find()
    res.send(pass[0].password)
  } catch (error) {
    console.log(error)
  }
})



module.exports = router;




// working modal

// await notes.updateOne(
//   {
//     _id: "62a61949dc0f920ae99fc687",
//     "subjects.notes.notes_id": "221fad-f35c-ee2a-65b3-8531dbfcf732",
//   },
//   {
//     $push: {
//       "subjects.$[s].notes.$[n].material": [
//         {
//           material_id: "modi oab",
//           heading: "modiPrime",
//           link: "wwo.modie.com",
//         },
//       ],
//     }
//   },
//   {
//     arrayFilters: [
//       { 's._id': '62a61949dc0f920ae99fc688' },
//       { 'n._id': '62a61949dc0f920ae99fc689' }
//     ],
//   },
// );