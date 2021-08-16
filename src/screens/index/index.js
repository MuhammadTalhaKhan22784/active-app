// import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Nav from '../../assets/components/nav'
// import Question1 from '../1question/main'
// import Question2 from '../3question/main'
// import Question3 from '../4question/main'
// import MultipleChoices1 from '../MultipleChoices1/main'
// import MultipleChoices2 from '../MultipleChoices2/main'
// import MultipleChoices3 from '../MultipleChoices3/main'
// import MultipleChoices4 from '../MultipleChoices4/main'
// import MultipleChoices5 from '../MultipleChoices5/main'
// import MultipleChoicesP2 from '../MultipleChoicesP2/main'
// import WeeklyProgram1 from '../1weeklyProgram/main'
// import WeeklyProgram1Error from '../1weeklyProgramError/main'
// import ExercisePage from '../exercisePage/main'
// import ExercisePageMain from '../exercisePageMain/main'
// import InboxReply from '../inboxReply/main'
// import LoginPage from '../loginPage/main'
// import PersonalAreaPage from '../PersonalAreaPage/main'
// import PersonalAreaPageNew from '../PersonalAreaPageNew/main'
// import PersonalAreaPageTry from '../PersonalAreaPageTry/main'

// const index = () => {
//   return (
//     <Router>
//       <nav className='container'>
//         <ul>
//           <li className='item'>
//             <Link to='/'>1 Question</Link>
//           </li>
//           <li className='item'>
//             <Link to='/q2'>2 Question</Link>
//           </li>
//           <li className='item'>
//             <Link to='/q3'>3 Question</Link>
//           </li>
//           <li className='item'>
//             <Link to='/mc1'>Multiple Choices 1</Link>
//           </li>
//           <li className='item'>
//             <Link to='/mc2'>Multiple Choices 2</Link>
//           </li>
//           <li className='item'>
//             <Link to='/mc3'>Multiple Choices 3</Link>
//           </li>
//           <li className='item'>
//             <Link to='/mc4'>Multiple Choices 4</Link>
//           </li>
//           <li className='item'>
//             <Link to='/mc5'>Multiple Choices 5</Link>
//           </li>
//           <li className='item'>
//             <Link to='/mcp2'>Multiple Choices p2</Link>
//           </li>
//           <li className='item'>
//             <Link to='/wp'>Weekly Program</Link>
//           </li>
//           <li className='item'>
//             <Link to='/wpe'>Weekly Program Error</Link>
//           </li>
//           <li className='item'>
//             <Link to='/ep'>Exercise Page</Link>
//           </li>
//           <li className='item'>
//             <Link to='/epm'>Exercise Page Main</Link>
//           </li>
//           <li className='item'>
//             <Link to='/ir'>Inbox Reply</Link>
//           </li>
//           <li className='item'>
//             <Link to='/lp'>Login Page</Link>
//           </li>
//           <li className='item'>
//             <Link to='/pap'>Personal Area Page</Link>
//           </li>
//           <li className='item'>
//             <Link to='/papn'>Personal Area Page New</Link>
//           </li>
//           <li className='item'>
//             <Link to='/papt'>Personal Area Page Try</Link>
//           </li>
//         </ul>
//       </nav>

//       <Nav />
//       <Route exact path='/'>
//         <Question1 />
//       </Route>
//       <Route exact path='/q2'>
//         <Question2 />
//       </Route>
//       <Route exact path='/q3'>
//         <Question3 />
//       </Route>
//       <Route exact path='/mc1'>
//         <MultipleChoices1 />
//       </Route>
//       <Route exact path='/mc2'>
//         <MultipleChoices2 />
//       </Route>
//       <Route exact path='/mc3'>
//         <MultipleChoices3 />
//       </Route>
//       <Route exact path='/mc4'>
//         <MultipleChoices4 />
//       </Route>
//       <Route exact path='/mc5'>
//         <MultipleChoices5 />
//       </Route>
//       <Route exact path='/mcp2'>
//         <MultipleChoicesP2 />
//       </Route>
//       <Route exact path='/wp'>
//         <WeeklyProgram1 />
//       </Route>
//       <Route exact path='/wpe'>
//         <WeeklyProgram1Error />
//       </Route>
//       <Route exact path='/ep'>
//         <ExercisePage />
//       </Route>
//       <Route exact path='/epm'>
//         <ExercisePageMain />
//       </Route>
//       <Route exact path='/ir'>
//         <InboxReply />
//       </Route>
//       <Route exact path='/lp'>
//         <LoginPage />
//       </Route>
//       <Route exact path='/pap'>
//         <PersonalAreaPage />
//       </Route>
//       <Route exact path='/papn'>
//         <PersonalAreaPageNew />
//       </Route>
//       <Route exact path='/papt'>
//         <PersonalAreaPageTry />
//       </Route>
//       <Route path='*'>{}</Route>
//     </Router>
//   )
// }

// export default index
