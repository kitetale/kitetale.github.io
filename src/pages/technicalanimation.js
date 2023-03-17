import React from "react";
import AppHeader from "../component/AppHeader/AppHeader";
import favicon from "../images/favicon.png";
import { Helmet } from "react-helmet";
import { overall, content2 } from "./ResumePage.module.css";

const technicalanimation = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | Technical Animation Blog</title>
      </Helmet>
      <div className={overall}>
        <AppHeader />
        <div className={content2}>
          <h1>15-464 Technical Animation Blog</h1>
          <h2>January 18, 2023 (Wed)</h2>
          <p>
            I'm excited for this class, especially for the special effects
            aspect of the course. My main interest lies in special effects,
            interactive design, and immersive media. I look forward to learning
            more about the state of art technical animation tools and algorithms
            and potentially apply or use those tools in my personal
            practice/projects.
          </p>

          <h2>January 23, 2023 (Mon)</h2>
          <p>
            Going over walk cycle and motion capture was a good review for me,
            as the last time I worked with these was last spring semester (S22).
            Although I've seen many of the applications of motion capture data,
            I haven't really looked into the data file itself before. Looking
            into what the motion capture data file looks like made me appreciate
            once again of the already developed opensource parsers.
          </p>

          <h2>January 25, 2023 (Wed)</h2>
          <p>
            Learning about different implementation methods for IK in class
            today was highly valuable to me. All I knew regarding Jacobian was
            the basics that we briefly covered in Computer Graphics course, so
            walking through the paper on different applications of Jacobian and
            pseudoinverse was very helpful. Perhaps I can try implementing these
            for the second part of the first mini project?
          </p>

          <h2>January 30, 2023 (Mon)</h2>
          <p>
            It was interesting to see how Jacobian transpose relates to gradient
            descent. However, I don't know if I fully understand the transition
            from the equation we covered last class to the one we covered today,
            as I don't see how subtracting the offset gives similar result. Or
            was it suppose to mean that the gradient descent gives higher
            accuracy because it's subtracting the offset amount of a part that
            shouldn't be shifting? I also realized during today's class that I
            was misunderstanding the use of rotational axis in last class when
            it's used to cross with the distance from joint to end point (r_i).
            I appreciate how material we cover in class build onto each other
            instead of introducing new topic each time. This way gives me time
            to sit with the topic we covered in class and review again during
            the following class to strengthen understanding. Also, it
            assimiliates how researches are done (i.e. build onto previously
            released paper and compare & contrast).
          </p>

          <h2>February 1, 2023 (Wed)</h2>
          <p>
            To me, rigging and skinning always have been the 'required' steps
            that I just had to do to get to the fun animation part. Learning
            about RigNet and Neural Blend Shapes for rigging and skinning was
            useful, as it seemed highly practical and time-saving. I still
            wonder how these models were trained, specifically how blend shapes
            are predicted. Based on my previous experience, blend shapes still
            rely on the initial rigging and skinning that's done on the rest A
            or T pose of the character, then set a certain pose as the end pose
            for the blend shape. However, the Neural Blend Shapes paper seemed
            to imply that these blend shapes can be trainned in a different
            manner than how RigNet trains to predict where the rig would be
            located and mesh weights would be distributed. Although my main
            interest lies in visual effects and simulation, I think it would be
            interesting to further look into the papers on automated rigging and
            skinning.
          </p>

          <h2>February 6, 2023 (Mon)</h2>
          <p>
            Motion capture lab visit was a good review session, although since
            it was my third time there as a class, I wasn't surprised with
            anything new. I'm still unclear if I would use motion capture lab
            for the final project, but I'm glad to know that it's available as
            an option if I need to capture any motion. Learning about Arjun's
            paper on figuring out the hand gesture by area indication on mesh
            was highly interesting, as I haven't thought about defining a hand
            gesture based on a contact area between the two mesh. I think in
            general learning about what techniques are out there opens up the
            perspective on how one can see the same problem form different
            angles and focus.
          </p>

          <h2>February 8, 2023 (Wed)</h2>
          <p>
            First paper presentations today. Again, I find these paper
            presentations really crucial and useful, as I get to have exposures
            to various techniques out there without having to fully dive into
            the paper and all the math. The non-Euclidean space paper was highly
            interesting, as I've seen its applications across various video
            games but didn't really know much about the concept and math behind
            it. I also wouldn't have known about it since I couldn't tell that
            the paper discussed such a topic only from the title. (i.e. I didn't
            know such portal effect and dimension changing was called
            non-Euclidean space...)
          </p>

          <h2>February 13, 2023 (Mon)</h2>
          <p>
            As also an art student, I think having a time dedicated for sharing
            works is useful for future projects. Although it wasn't a crit
            session for people to give ideas on how to improve on the project,
            viewing others' works gave me a good sense of what the individual
            strengths of this class is. It was also a session that reminded me
            of how the artists and the developers view and operate the tools
            differently.
          </p>

          <h2>February 15, 2023 (Wed)</h2>
          <p>
            I don't think I ever looked into how cloth simulation works behind
            the scene. It was quiet a fresh idea for me to see that the cloth
            simulation is a collection of spring phyiscs intertwined. I see how
            this would intuitively work since cloth also has a tendancy to go
            back to its original stable state upon stretching it out. I wonder
            who first came up with this idea to simulate cloth.
          </p>

          <h2>February 20, 2023 (Mon)</h2>
          <p>
            I think cloth collision is one of the effects/simulations that can
            convey so many different types by just tweeking a few paramenters.
            There exits so many types and feels of fabric in this world, and I
            think that's what makes cloth simulation both the hardest and the
            easiest to make. As long as we make sure the cloth doesn't get
            caught in the movement of the rig and creates an artifact, cloth
            simulation can already look somewhat natural enough to convey the
            idea of cloth.
          </p>

          <h2>February 22, 2023 (Wed)</h2>
          <p>
            Talking about different ways of collision offset/detection methods
            reminded me of Computer Graphics light ray and particle collision
            parts. Since we already went over and had to implement as part of
            the Computer Graphics course, checking whether collision has
            occurred and going forward/back in the timestep to place the object
            at the boarder was the most straightforward idea to understand. I
            also happened to make
            <a href="https://www.instagram.com/kitetale/">
              a few of rigid-body collision effects in Houdini
            </a>
            , and I was very surprised by how accurate Houdini's code dealt with
            collision.
          </p>

          <h2>February 27, 2023 (Mon)</h2>
          <p>
            Among the papers presented today, I found the cloth prediction one
            very interesting. I learned so much through this class that Neural
            Network has been the state of the art method for various types of
            simulations and animation techniques. It really reminded me of how
            AI is integrating into all industries to improve the techniques.
            Yarn-level cloth simulation was also cool to learn about, as I
            haven't really thought about how different patterns of weaving
            influence how the overall cloth interacts with itself and other
            objects. I'm not sure if it's a trend in CMU or everywhere, but I
            also have noticed that a lot more people are now interested in the
            algorithmic textile.
          </p>

          <h2>March 1, 2023 (Wed)</h2>
          <p>
            Seeing previous final projects today was so intriguing and
            inspiring. I was not only able to understand what's expected for the
            final project, but also guage the diversity in topics and methods
            that I could implement for the final project. I think I want to do
            some sort of particle simulation, probably particle simulation that
            mimics fluid simulation. The water ripple one and rigid body contact
            seemed very fun to play with and relatively easy to implement. Snow
            simulation was also interesting -- I remember seeing snow simulation
            test videos for Frozen from Art, Animation, and Technology class.
            Perhaps I could do a wrecking ball/angry bird collision on snow-like
            particles. I'm still not sure what I would be working on for the
            final project, so my plan would be coming up with several ideas and
            narrow it down to one during the meeting with professor.
          </p>

          <h2>March 13, 2023 (Mon)</h2>
          <p>
            I just flew in from Ithaca this morning and came straight to the
            class. I thought I'd be missing this class, but I was able to find
            an alternative flight that would let me be here in time for class!
            I'm excited for my final project; I was afraid the idea I liked the
            most (applying real-time Kinect depth mocap data to the character
            like what Nick did before) might be out of scope for the class, but
            I'm glad to have the professor's confirmation that it's within the
            scope. I may have to flesh out my idea more, but I'm planning to use
            openFrameworks to apply mocap data from Kinect's depth image to a 3d
            character. Perhaps I can use GLSL to make the 3D character? I was
            extremely impressed when I watched Inigo Quilez's
            <a href="https://www.youtube.com/watch?v=8--5LwHRhjk&ab_channel=InigoQuilez">
              {" "}
              "Painting a Character with Maths"
            </a>{" "}
            or{" "}
            <a href="https://www.youtube.com/watch?v=Cfe5UQ-1L9Q&ab_channel=InigoQuilez">
              {" "}
              "Happy Jumping"
            </a>{" "}
            animation live coding video. Perhaps I could pull some math
            equations from these to construct my own ( simpler) character for
            the final project. I'm thinking to have both live demo and
            documentation video for the presentation.
          </p>

          <h2>March 15, 2023 (Wed)</h2>
          <p>
            Although I have decided to work with Kinect for my final project,
            hearing about others' final project ideas and references was quiet 
            inspiring and useful. I'm planning to read more about certain papers
            others mentioned, such as rigid body fracture based on pressure, for
            my senior art capstone project that I'll be presenting at the senior
            art show at Miller ICA at the end of the semester. 
            Otherwise, I'm excited to learn more about fluid simulation. It's 
            just so mindblowing to see how much graphcis technology has developed
            over time -- Water simulation in Avater II was extremely realistic,
            and it's always impressive to see and realize that the first 'good-looking'
            fluid simulations only happened not so long ago. Sometimes I feel like
            the world has invented so many algorithms and graphical techniques 
            while I was just growing up... So much has happened since 2000, if not 
            even before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default technicalanimation;
