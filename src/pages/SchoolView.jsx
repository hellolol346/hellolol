import React from 'react'
import Example from '../images/school-example.jpg'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

const logToConsole = () => console.log(3 + 4)

const Clickable = ({ title }) => (
   <button id="Clickable">{title}</button>
)

const SchoolView = () => (
   <section id="SchoolView">
      <p>This is the School page. Here you can learn about what I do in school and what happens 
         in my classroom.</p>
      <img src={Example} />
      <br />
   <p>So I just finished elementry school and it was quite fun. In kindergarten,
      I had a really nice teacher named Mrs.Canepa. We mostly had fun the whole school
      year. We still worked a lot but overall it was fun. All I remember was singing songs,
      doing art, reading with 3rd graders, and doing math. 
   </p>
   <br />
   <p>In first grade, it was like kindergarten, but there was more work than before. 
      It was pretty laid back too. We did social studies, science, math, and reading. We also did activities
      with buddies and and fun projects. Overall, it was fun, but there was some work.
</p>
<br />
<p>So in second grade basically it was the same, but the studying was definetly
   more. We sprinkled in a bit of fun too so it wasn't all work. Now that I am about to 
go to middle school I think that it was quite easy, but for a second grader they would feel more
pressure than in first grade or kindergarten.
</p>
<br />
<p>For third grade, I had a really nice teacher named Mrs. Yao. She always made things function and she wasn't
   strict at all. However, she would still give all the knowledge needed. So in third
   grade, there was this California state test we had to take. That was my first time
   I ever felt stressed. Third grade was the year that wasn't laid back. The results for the 
  for me was great, but I knew this would happen again next year.
   </p>
   <br />
   <p> In fourth grade, you started to become more independent. You had a big jump 
      in learning. I felt more stressed, but I managed quite easily in the second and third
      trimester. Then there was the state test again. I relaed myself and then I did the test, there was no time 
      limit, so I felt no stress with it. I had definetly changed that year. I was going
      to be more independent. 
   </p> 
   <br />     
   <p> In fifth grade, I was acing it because of my independence. I may have been a bit 
      too harsh on myself. I started to do more work then needed, which is good, but should have relaxed
      a bit more. The california test was pretty easy and the results were great, but then we
      had the math placement test. Not everyone reading has to do this, but this 
      test really matters. If you don't pass the test you will be learning the common
      core standards for 6th grade. Then you will have to pay extra money in collage 
      because if you were to be in the advanced route. You would be able to save money and
      spend less time in collage. If you were in the advanced route, you would be a year
      ahead. This caused a lot of stress, but I was still in advanced math. Now I am using
      my time in summer to relax and have fun.

   </p>          
   </section>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default SchoolView
