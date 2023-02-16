import React from 'react';
import CaseStudyPage from './CaseStudyPage';
import Avatar from './Avatar';
import ThoughtBubble from './ThoughtBubble';
import MobileScreen from './MobileScreen';
import ThoughtRectangle from './ThoughtRectangle';
import DecodeTitle from './DecodeTitle';
import Insight from './Insight';
import CaseStudy from './CaseStudy';
import LaptopScreen from './LaptopScreen';
import LeftImageContainer from './LeftImageContainer';
function App() {
  const baseS3Url = 'https://digibucket-hive.s3.ap-south-1.amazonaws.com/big-basket-case-study/assets'
  const screenImage = `${baseS3Url}/screen/screen_1.png`
  const searchImage = ''
  const laptopImage = ''
  const aalekhImage = ''
  const aalekhWithMoney = ''
  const aalekhWithPhone = ''
  const aalekhSurprised = ''
  const aalekhPointingUp = ''
  const aalekhThinking = ''
  const aalekhThinkingRight = ''
  const aalekhHow = ''
  const aalekhExcellent = ''
  const aalekhHoldingHead = ''
  const aalekhCringe = ''
  const aalekhNormal = ''
  const aalekhOh = ''
  const aalekhShockedWithHands = ''
  const aalekhWithMoneyAndSmile = ''
  const aalekhTwo = ''
  const aalekhEyeBrowUp = ''
  return (
    <div>
      <CaseStudy >
        {/* Page 0 */}
        <CaseStudyPage key={0}>
          <ThoughtBubble>
            <h6 className='text-center text-black text-[28px]'>Have you ever wondered why <br></br> the eCommerce apps you use <br></br> are designed the way they <br></br> are?</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 1 */}
        <CaseStudyPage key={1}>
          <ThoughtBubble >
            <h6 className='text-center text-black text-[28px]'>Don't worry <br /> because we have!</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 2 */}
        <CaseStudyPage key={2}>
          <DecodeTitle colorClass='bg-[#669E38]'>
            <h3 className='text-[50px] my-0'>Digiaccel Decodes <br></br> eCommerce <br></br> User Flows</h3>
          </DecodeTitle>
          <MobileScreen position='right' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhPointingUp} className='bottom-[5%]' />
        </CaseStudyPage>
        {/* Page 3 */}
        <CaseStudyPage key={3}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              So, it&apos;s the start of the month and you <br></br> have to order your Groceries
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 4 */}
        <CaseStudyPage key={4}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              On your way to work, you pickup your <br />shopping list and fire up your Big Basket <br />app
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 5 */}
        <CaseStudyPage key={5}>
          <MobileScreen position='center' imgSrc={screenImage} />

          <Avatar imgSrc={aalekhThinking} />
        </CaseStudyPage>
        {/* Page 6 */}
        <CaseStudyPage key={6}>
          <ThoughtBubble >
            <h5 className='text-center text-black font-bold text-[28px] mt-[-20px]'>Lowest prices!</h5>
            <h6 className='text-[28px] text-center w-[300px] mb-[20px]'>
              I don’t need stuff <br></br> immediately, so let me <br></br> shop from here
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 7 */}
        <CaseStudyPage key={7}>
          <ThoughtBubble >
            <h5 className='text-center text-black font-bold text-[28px] w-[300px]'>4 hrs. Not bad prices!</h5>
            <h6 className='text-[28px] text-center'>
              Products seem to be at <br></br> a discount. That’s great
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* page 8 */}
        <CaseStudyPage key={8}>
          <ThoughtBubble >
            <h6 className='text-[28px] px-[20px]'>
              Looks like there is <br /> a discount on good <br /> brands as well...
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 9 */}
        <CaseStudyPage key={9}>
          <ThoughtBubble>
            <h6 className='text-center text-black text-[28px] mt-[-15px]'>
              And on<br />food essentials…
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar addMoney imgSrc={aalekhSurprised} />
        </CaseStudyPage>
        {/* Page 10 */}
        <CaseStudyPage key={10}>
          <ThoughtBubble >
            <h6 className='text-center text-black text-[28px] mt-[-15px]'>
              And <br /> laundry products …
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar addMoney imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 11 */}
        <CaseStudyPage key={11}>
          <ThoughtBubble >
            <h6 className='text-center p-0 text-black text-[28px] mt-[-15px]'>
              and<br /> Specialty foods…
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhWithMoney} className='left-[2%]' />
        </CaseStudyPage>
        {/* Page 12 */}
        <CaseStudyPage key={12}>
          <ThoughtBubble >
            <h6 className='text-center px-[15px] text-black text-[28px] mt-[-15px]'>
              Wow, some <br /> products are even  at <br /> a <span className='text-[#ED1B23]'>50%</span> discount…
            </h6>
          </ThoughtBubble>
          <MobileScreen position='center' imgSrc={screenImage} />
          <Avatar imgSrc={aalekhWithMoney} className='left-[2%]' />
        </CaseStudyPage>
        {/* Page 13 */}
        <CaseStudyPage key={13}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-0 ml-[-15px] mr-[-15px] text-black text-[28px]'>
              Seems like every category <br /> is at a discount...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinkingRight} />
        </CaseStudyPage>
        {/* Page 14 */}
        <CaseStudyPage key={14}>
          <MobileScreen isLeft position='center' imgSrc={screenImage} />
          <Insight>
            <h6 className='text-[20px] mt-[30px]'>
              <span className='text-[#333333] font-semibold'>Price </span>is a very important driver for the monthly grocery run.
            </h6>
            <h6 className='text-[20px] mt-[10px]' >
              Notice the <span className='text-[#333333] font-semibold'>“Har Din Sasta” </span>mentions and discount %age across categories.
            </h6>
            <h6 className='text-[20px] mt-[10px]'>
              This helps reinforce that BB has great pricing for your everyday needs
            </h6>
          </Insight>
        </CaseStudyPage>
        {/* Page 15 */}
        <CaseStudyPage key={15}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center  text-black text-[28px]'>
              But how do I find <br /> what I want….
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinking} />
        </CaseStudyPage>
        {/* Page 16 */}
        <CaseStudyPage key={16}>
          <LeftImageContainer imgSrc={searchImage} />
          <Insight>
            <h6 className='text-[20px] mt-[30px]'>
              Usually grocery is not a <br /><span className='text-[#333333] font-semibold'>browse</span> category
            </h6>
            <h6 className='text-[20px] mt-[10px]' >
              Shoppers are clear about what they want and want to find those items really quickly...
            </h6>
          </Insight>
        </CaseStudyPage>
        {/* Page 17 */}
        <CaseStudyPage key={17}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw] mb-[20px]'>
              Notice how the <span className='text-[#333333] font-semibold'>search bar</span> stays stuck <br />to the top as you browse...
            </h6>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Also, constantly reinforcing that they <br />have <span className='text-[#333333] font-semibold'
              >100,000+ products</span>
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 18 */}
        <CaseStudyPage key={18}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start p- text-black text-[28px]'>
              Let me just see my list <br /> and search for what I<br /> want...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhWithPhone} className=' !bottom-[3%] ' />
        </CaseStudyPage>
        {/* Page 19 */}
        <CaseStudyPage key={19}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px] pt-5'>
              Let me start with <span className='text-[#333333] font-semibold'>atta</span>....
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhPointingUp} className='bottom-[5%]' />
        </CaseStudyPage>
        {/* Page 20 */}
        <CaseStudyPage key={20}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              A click at the <span className='font-bold'>“search bar”</span> 🔍 shows <br /> most frequently searched and bought <br /> categories..
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 21 */}
        <CaseStudyPage key={21}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Notice how the search term is prompted <br /> as soon as he starts typing it...
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 22 */}
        <CaseStudyPage key={22}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              The most common searches are listed to <br />reduce typing effort and make it easy to <br /> find what they want...
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 23 */}
        <CaseStudyPage key={23}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              How convenient...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhHow} />
        </CaseStudyPage>
        {/* Page 24 */}
        <CaseStudyPage key={24}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw] mb-[20px]'>
              A quick search helps find atta...
            </h6>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Notice the <span className='text-[#333333] font-semibold italic'>"brands listed"</span> to make the <br /> process easier...
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 25 */}
        <CaseStudyPage key={25}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[33vw]'>
              <span className='text-[#333333] font-semibold'>"Add button"</span>  to allow shoppers to <span className='text-[#333333] font-semibold'>add</span> <br />from this page itself(search landing page)
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 26 */}
        <CaseStudyPage key={26}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              The first item...<br /> Its as if Big Basket read <br />my mind...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhExcellent} className=' !bottom-[3%] scale-[0.7]' />
        </CaseStudyPage>
        {/* Insight */}
        <CaseStudyPage key={'insight'}>
          <MobileScreen isLeft position='center' imgSrc={screenImage} />
          <Insight>
            <h6 className='text-[20px] mt-[30px]'>
              Big Basket wants to get the shopper to start building the cart as easily as possible.
            </h6>
            <h6 className='text-[20px] mt-[10px]' >
              The auto-fill on search, highest selling pack on top are all ways to get the shopper to start building their cart.
            </h6>
            <h6 className='text-[20px] mt-[10px]'> It gets the shopper invested in the process and increases likelihood of a checkout.</h6>
          </Insight>
        </CaseStudyPage>
        {/* Page 27 */}
        <CaseStudyPage key={27}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center text-black text-[28px] px-[30px] mt-[-15px]'>
              Next item on <br /> the list... <br /><span className='text-[#333333] font-semibold italic'>"Shampoo"</span>
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinking} />
        </CaseStudyPage>
        {/* Page 28 */}
        <CaseStudyPage key={28}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw] mb-[20px]'>
              Notice the product with the <br /> <span className='text-[#333333] font-semibold italic'>"sponsored" </span>tag.
            </h6>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              While these are paid ads, every product <br />can't make their way to the top...
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 29 */}
        <CaseStudyPage key={29}>
          <ThoughtRectangle>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Swipe up reveals more products and a<br />smartly placed ad
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 30 */}
        <CaseStudyPage key={30}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Can't find anything <br /> I normally use...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhHoldingHead} className='!left-[3%] !bottom-[6%]' />
        </CaseStudyPage>
        {/* Page 31 */}
        <CaseStudyPage key={31}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Still nothing...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhCringe} />
        </CaseStudyPage>
        {/* Page 32 */}
        <CaseStudyPage key={32}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Let me just select the<br /> brand I normally use...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhWithPhone} className='!bottom-[3%] left-[4%]' />
        </CaseStudyPage>
        {/* Page 33 */}
        <CaseStudyPage key={33}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Hmmm...why can't <br /> I find <span className='text-[#333333] font-semibold'>"Dove Shampoo"</span>
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinkingRight} />
        </CaseStudyPage>
        {/* Page 34 */}
        <CaseStudyPage key={34}>
          <ThoughtRectangle>
            <h6 className='text-center text-black text-[28px] max-w-[40vw] mb-[20px]'>
              Notice that the <span className='text-[#333333] font-semibold'>"sponsored"</span>  slots have<br /> stayed there which means that the
            </h6>
            <h6 className='text-center text-black text-[28px] max-w-[40vw]'>
              shopper has only found one Dove product<br /> in the first <span className='text-[#333333] font-semibold'>"scroll"</span>
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 35 */}
        <CaseStudyPage key={35}>
          <LeftImageContainer imgSrc={searchImage} />
          <Insight>
            <h6 className='text-[20px] mt-[30px]'>
              While ads are a large source of reveue, ensuring that they are relevant and do not impact shopper experience is important
            </h6>
            <h6 className='text-[20px] mt-[10px]' >
              All eCommerce retailers incl Big Basket have to walk this tight rope.
            </h6>
          </Insight>
        </CaseStudyPage>
        {/* Page 36 */}
        <CaseStudyPage key={36}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Finally found what I <br /> wanted...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhPointingUp} className='bottom-[5%]' />
        </CaseStudyPage>
        {/* Page 37 */}
        <CaseStudyPage key={37}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center text-black text-[28px] ml-[-20px] mr-[-20px]'>
              I don't really need the <span className='text-[#333333] font-semibold italic'>1 litre </span>but it <br /> is at a <span className='text-[#333333] font-semibold'>better price vs the others</span> ...<br /> So let me buy that...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhNormal} />
        </CaseStudyPage>
        {/* Page 38 */}
        <CaseStudyPage key={38}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Let's move on...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 39 */}
        <CaseStudyPage key={39}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start pl-5 text-black text-[28px]'>
              But I have so many more <br /> items on my list... There has <br /> to be a better way of doing<br />this...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 40 */}
        <CaseStudyPage key={40}>
          <MobileScreen position='right' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start p-2 text-black text-[28px]'>
              Hey, all of these products <br />look familiar...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhOh} />
        </CaseStudyPage>
        {/* Page 41 */}
        <CaseStudyPage key={41}>
          <MobileScreen position='right' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              I use a lot of Coca Cola. Let me <br />add a few of those even though <br />it is not on my list...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhWithPhone} className='!bottom-[3%]' />
        </CaseStudyPage>
        {/* Page 42 */}
        <CaseStudyPage key={42}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px] ml-[-15px] mr-[-15px]'>
              I can browse through categories<br /> like i would in a super-market...<br /> But these show <br /><span className='text-[#333333] font-semibold'>" my brands and products" </span> only... <br /> How Convenient...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhShockedWithHands} />
        </CaseStudyPage>
        {/* Page 43 */}
        <CaseStudyPage key={43}>
          <Insight>
            <h6 className='text-[20px] mt-[30px]'>
              Grocery shopping usually
            </h6>
            <h6 className='text-[20px] mt-[2px]' >
              happens off a list. Users tend to repeat the brands that they buy or buy from their selection of brands (called Consideration Set)
            </h6>
            <h6 className='text-[20px] mt-[10px]'>
              Big Basket curates the list of products that shoppers have  bought in the past to make it easy for them to find what they need.
            </h6>
          </Insight>
        </CaseStudyPage>
        {/* Page 44 */}
        <CaseStudyPage key={44}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Needed to buy <span className='text-[#333333] font-semibold'> Tea</span>...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhWithPhone} className=' !bottom-[1%]' />
        </CaseStudyPage>
        {/* Page 45 */}
        <CaseStudyPage key={45}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start p-2 text-black text-[28px]'>
              Some more items off <br />the list...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhOh} />
        </CaseStudyPage>
        {/* Page 46 */}
        <CaseStudyPage key={46}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-0 text-black text-[28px] ml-[-20px] mr-[-20px]'>
              Found all my <br /> <span className='text-[#333333] font-semibold italic'>Pantry Staples </span>together...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhExcellent} className=' !bottom-[3%] scale-[0.7]' />
        </CaseStudyPage>
        {/* Page 47 */}
        <CaseStudyPage key={47}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start text-black text-[28px]'>
              Whoever thought of selling <br />  <span className='text-[#333333] font-semibold italic'>"peeled pomegranate"</span> is a <br /> genius!
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 48 */}
        <CaseStudyPage key={48}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start text-black text-[28px]'>
              Some more vegetables<br /> off the list
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhNormal} />
        </CaseStudyPage>
        {/* Page 49 */}
        <CaseStudyPage key={49}>
          <LaptopScreen imgSrc={laptopImage} />
          <ThoughtBubble >
            <h6 className='text-start ml-[-20px] mr-[-10px] text-black text-[28px]'>Let me check if I have got <br />
              everything…</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 50 */}
        <CaseStudyPage key={50}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Let me get that real <br />quick and checkout...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhWithPhone} className=' !bottom-[3%]' />
        </CaseStudyPage>
        {/* Page 51 */}
        <CaseStudyPage key={51}>
          <ThoughtRectangle className=' bottom-[-20%]'>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Notice how the app allows you <br /> to search for colloquial  or Hindi<br /> words as well
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>

        {/* Page 52 */}
        <CaseStudyPage key={52}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              and we are done!
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhExcellent} className=' !left-[4%] !bottom-[3%] scale-[0.7]' />
        </CaseStudyPage>

        {/* Page 53 */}
        <CaseStudyPage key={53}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>
              Looks like I am  saving<br /> a lot of money!
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhWithMoneyAndSmile} className='left-[3%]' />
        </CaseStudyPage>

        {/* Page 54 */}
        <CaseStudyPage key={54}>
          <ThoughtRectangle className='bottom-[-20%]'>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Showing  Savings reinforces that the<br /> shopper got great value. It als serves <br /> as a subconscious nudge to checkout.
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 55 */}
        <CaseStudyPage key={55}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start p-2 text-black text-[28px]'>
              Looks like I saved some <br /> products the last time and<br /> forgot about them...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhTwo} />
        </CaseStudyPage>
        {/* Page 56 */}
        <CaseStudyPage key={56}>
          <ThoughtRectangle className='bottom-[-20%]'>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Notice the nudge to add more products <br />  to cart right before checkokout...
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 57 */}
        <CaseStudyPage key={57}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center ml-[-15px] mr-[-15px] text-black text-[28px]'>
              I think the <span className='text-[#333333] font-semibold'>"Chat Masala"</span><br /> might be  about to run out...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinkingRight} />
        </CaseStudyPage>
        {/* Page 58 */}
        <CaseStudyPage key={58}>
          <ThoughtRectangle className='bottom-[-20%]'>
            <h6 className='text-start text-[#333333] font-semibold text-[28px] max-w-[40vw]'>Best deals</h6>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Induce the last minute FOMO to get users to <br /> browse and discover more products...
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 59 */}
        <CaseStudyPage key={59}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start p-0 ml-[-15px] mr-[-15px] text-black text-[28px]'>
              This <span className='text-[#333333] font-semibold'>"Pasta" </span>sounds Healthy...<br /> I could try it...
            </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhThinking} />
        </CaseStudyPage>
        {/* Page 60 */}
        <CaseStudyPage key={60}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center text-black text-[28px] ml-[-20px] mr-[-20px]'>Multiple delivery options</h6>
            <h6 className='text-center text-black text-[28px] ml-[-20px] mr-[-20px]'><span className='text-[#333333] font-semibold'>Shipping  tomorrow...</span> But  it said <br /><span className='text-[#333333] font-semibold'>4 hrs</span>  right  at the beginning!</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhEyeBrowUp} />
        </CaseStudyPage>
        {/* Page 61 */}
        <CaseStudyPage key={61}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start text-black text-[28px] ml-[-20px] mr-[-20px] pl-5'>Ahh... Here is the  <span className='text-[#333333] font-semibold italic'>4 hour</span> option...<br /> But I will need  to receive <span className='text-[#333333] font-semibold italic'>1 item <br /> tomorrow...</span> </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhShockedWithHands} />
        </CaseStudyPage>
        {/* Page 62 */}
        <CaseStudyPage key={62}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start text-black text-[28px]'>I don't need things that urgently.<br /> So I guess i will take all <span className='text-[#333333] font-semibold'>tomorrow</span> <br /> only...</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhImage} />
        </CaseStudyPage>
        {/* Page 63 */}
        <CaseStudyPage key={63}>
          <ThoughtRectangle className='bottom-[-10%]'>
            <h6 className='text-start text-black text-[28px] max-w-[40vw]'>
              Notice  how Big Basket gives delivery <span className='text-[#333333] font-semibold'>slot <br />times </span>  to make it even more convenient.<br /> In this case, because one item was stored  a bit farther away, Big Basket gave <span className='text-[#333333] font-semibold' >both <br />delivery options</span> to the shopper.
            </h6>
          </ThoughtRectangle>
          <MobileScreen position='center' imgSrc={screenImage} />
        </CaseStudyPage>
        {/* Page 64 */}
        <CaseStudyPage key={64}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-center p-2 text-black text-[28px]'>I saved  over <span className='text-[#333333] font-semibold'>Rs.800!</span>  <br />Plus  I can  use  some of my <br /> <span className='text-[#333333] font-semibold'>Reward Points</span> </h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhWithMoneyAndSmile} className=' !left-[3%]' />
        </CaseStudyPage>
        {/* Page 65 */}
        <CaseStudyPage key={65}>
          <MobileScreen position='center' imgSrc={screenImage} />
          <ThoughtBubble >
            <h6 className='text-start p-2 text-black text-[28px]'>Let's pay and close this.<br />Almost about to get to <br />work...</h6>
          </ThoughtBubble>
          <Avatar imgSrc={aalekhPointingUp} className='bottom-[5%]' />
        </CaseStudyPage>
      </CaseStudy>
    </div>
  );
}

export default App;
