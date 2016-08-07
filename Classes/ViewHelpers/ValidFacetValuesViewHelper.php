<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2015 Marcus Hellmann, Göttingen Academy of Sciences and Humanities
 *                <mhellma1@gwdg.de>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 ******************************************************************************/

namespace Gjz18\TmplGjz\ViewHelpers;

class ValidFacetValuesViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('arr', 'array', 'The values to check', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {

		$returnArray = array();
		$needles = $this->arguments['arr'];
		$validValues = array("001913999", "001914006", "001914014", "001914022", "001914030", "001914049", "001914057", "001914065", "001915002", "001914073", "00191491x", "001914081", "00191409x", "001914103", "001914111", "00191412x", "001914138", "001914146", "001914162", "001914170", "001914189", "001914197", "001914200", "001914219", "001914227", "001914235", "001914243", "001914251", "00191426x", "001914278", "001914286", "001914294", "001914308", "001914316", "001914324", "001914332", "001914340", "001914359", "001914367", "001914375", "001914383", "001914391", "001914405", "001914413", "001914421", "00191443x", "001914448", "001914456", "001914464", "001914472", "001914480", "001914499", "001914502", "001914510", "001914529", "001914537", "001914545", "001914553", "001914561", "00191457x", "001914588", "001914596", "00191460x", "001914618", "001914626", "001914634", "001914642", "001914650", "001914669", "001914677", "001914685", "001914693", "001914707", "001914715", "001914723", "001914731", "00191474x", "001914758", "001914766", "001914774", "001914782", "001914790", "001914804", "001914812", "001914820", "001914839", "001914847", "001914855", "001914863", "001914871", "00191488x", "001914898", "001914901", "001914928", "001914936", "001914952", "001914960", "001914979", "001914987", "001914995", "001915010", "001915029", "001915037", "001915045", "001915053", "001915061", "00191507x", "001915088", "001915096", "00191510x", "001915118", "001915126", "001915134", "001915142", "001915150", "001915169", "001915177", "001915185", "001915193", "001915207", "001915215", "001914944", "001915223", "001915231", "00191524x", "001915258", "001915266", "001915274", "001915282", "001915290", "001915304", "001915312", "001914154", "001915320", "001915339", "001915347", "001915355", "001915363", "001915371", "00191538x", "001915398", "001915401", "00191541x", "001915428", "001915436", "001915444", "001915452", "001915460", "001915479", "001915487", "001915495", "001915509", "001915517", "001915525", "001915533", "001915541", "00191555x", "001915568", "001915576", "001915584", "001915592", "001915606", "001915614", "001915622", "001915630", "001915649", "001915657", "001915665", "001915673", "001915681", "00191569x", "001915703", "001915711", "00191572x", "001915738", "001915746", "001915754", "001915762", "001915770", "001915789", "001915797", "001915800", "001915819", "001915827", "001915835", "001915843", "001915851", "00191586x", "001915878", "001915886", "001915894", "001915908", "001915916", "001915924", "001915932", "001915940", "001915959", "001915967", "001915975", "001915983", "001915991", "001916009", "001916017", "001916025", "001916033", "001916041", "00191605x", "001916068", "001916076", "001916084", "001916092", "001916106", "001916114", "001916122", "001916130", "001916149", "001916157", "001916165", "001916173", "001916181", "00191619x", "001916203", "001916211", "00191622x", "001916238", "001916246", "001916254", "001916262", "001916270", "001916289", "001916297", "001916300", "001916319", "001916327", "001916335", "001916343", "001916351", "00191636x", "001916378", "001916386", "001916394", "001916408", "001916416", "001916424", "001916432", "001916440", "001916459", "001916467", "001916475", "001916483", "001916491", "001916505", "001916513", "001916521", "00191653x", "001916548", "001916556", "001916564", "001916572", "001916580", "001917153", "001916599", "001916602", "001916610", "001916629", "001916637", "001916645", "001916653", "001916661", "00191667x", "001916688", "001916696", "00191670x", "001916718", "001916726", "001916734", "001916742", "001916750", "001916769", "001916777", "001916785", "001916793", "001916807", "001916815", "001916823", "001916831", "00191684x", "001916858", "001916866", "001916874", "001916882", "001916890", "001916904", "001916912", "001916920", "001916939", "001916947", "001916955", "001916963", "001916971", "00191698x", "001916998", "001917005", "001917013", "001917021", "00191703x", "001917048", "001917056", "001917064", "001917072", "001917080", "001917099", "001917102", "001917110", "001917129", "001917137", "001917145", "idz", "idrz", "gjz", "000019941", "000019933", "000019925", "000019917", "000019909", "000019895", "000019887", "000019879", "000019860", "000019852", "000019844", "000019836", "000019828", "00001981x", "000019801", "000019798", "00001978x", "000019771", "000019763", "000019755", "000019747", "000019739", "000019720", "000019712", "000019704", "000019690", "000019682", "000019674", "000019666", "000019658", "00001964x", "000019631", "000019623", "000019615", "000019607", "000019593", "000019585", "000019577", "000019569", "000019550", "000019542", "000019534", "000019526", "000019518", "00001950x", "000019496", "000019488", "00001947x", "000019461", "000019453", "000019445", "000019437", "000019429", "000019410", "000019402", "000019399", "000019380", "000019372", "000019364", "000019356", "000019348", "00001933x", "000019321", "000019313", "000019305", "000019291", "000019283", "000019275", "000019267", "000019259", "000019240", "000019232", "000019224", "000019216", "000019208", "000019194", "000019186", "000019178", "00001916x", "000019151", "000019143", "000019135", "000019127", "000019119", "000019100", "000019097", "000019089", "000019070", "000019062", "000019054", "000019046", "000019038", "00001902x", "000019011", "000019003", "000018996", "000018988", "00001897x", "000018961", "000018953", "000018945", "000018937", "000018929", "000018910", "000018902", "000018899", "000018880", "000018872", "000018864", "000018856", "000018848", "00001883x", "000018821", "000018813", "000018805", "000018791", "000018783", "000018775", "000018767", "000018759", "000018740", "000018732", "000018724", "000018716", "000018708", "000018694", "000018686", "000018678", "00001866x", "000018651", "000018643", "000018635", "000018627", "000018619", "000018600", "000018597", "000018589", "000018570", "000018562", "000018554", "000018546", "000018538", "00001852x", "000018511", "000018503", "00001849x", "000018481", "000018473", "000018465", "000018457", "000018449", "000018430", "000018422", "000018414", "000018406", "000018392", "000018384", "000018376", "000018368", "00001835x", "000018341", "000018333", "000018325", "000018317", "000018309", "000018295", "000018287", "000018279", "000018260", "000018252", "000018244", "000018236", "000018228", "00001821x", "000018201", "000018198", "00001818x", "000018171", "000018163", "000018155", "000018147", "000018139", "000018120", "000018112", "000018104", "000018090", "000018082", "000018074", "000018066", "000018058", "00001804x", "000018031", "000018023", "000018015", "000018007", "00001799x", "000017981", "000017973", "000017965", "000017957", "000017949", "000017930", "000017922", "000017914", "000017906", "000017892", "000017884", "000017876", "000017868", "00001785x", "000017841", "000017833", "000017825", "000017817", "000017809", "000017795", "000017787", "000017779", "000017760", "000017752", "000017744", "000017736", "000017728", "00001771x", "000017701", "000017698", "00001768x", "000017671", "000017663", "000017655", "000017647", "000017639", "000017620", "000017612", "000017604", "000017590", "000017582", "000017574", "000017566", "000017558", "00001754x", "000017531", "000017523", "000017515", "000017507", "000017493", "000017485", "000017477", "000017469", "000017450", "000017442", "000017434", "000017426", "000017418", "00001740x", "000017396", "000017388", "00001737x", "000017361", "000017353", "000017345", "000017337", "000017329", "000017310", "000017302", "000017299", "000017280", "000017272", "000017264", "000017256", "000017248", "00001723x", "000017221", "000017213", "000017205", "000017191", "000017183", "000017175", "000017167", "000017159", "000017140", "000017132", "000017124", "000017116", "000017108", "000017094", "000017086", "000017078", "00001706x", "000017051", "000017043", "000017035", "000017027", "000017019", "000017000", "000016993", "000016985", "000016977", "000016969", "000016950", "000016942", "000016934", "000016926", "000016918", "00001690x", "000016896", "000016888", "00001687x", "000016861", "000016853", "000016845", "000016837", "000016829", "000016810", "000016802", "000016799", "000016780", "000016772", "000016764", "000016756", "000016748", "00001673x", "000016721", "000016713", "000016705", "000016691", "000016683", "000016675", "000016667", "000016659", "000016640", "000016632", "000016624", "000016616", "000016608", "000016594", "000016586", "000016578", "00001656x", "000016551", "000016543", "000016535", "000016527", "000016519", "000016500", "000016497", "000016489", "000016470", "000016462", "000016454", "000016446", "000016438", "00001642x", "000016411", "000016403", "00001639x", "000016381", "000016373", "000016365", "000016357", "000016349", "000016330", "000016322", "000016314", "000016306", "000016292", "000016284", "000016276", "000016268", "00001625x", "000016241", "000016233", "000016225", "000016217", "000016209", "000016195", "000016187", "000016179", "000016160", "000016152", "000016144", "000016136", "000016128", "00001611x", "000016101", "000016098", "00001608x", "000016071", "000016063", "000016055", "000016047", "000016039", "000016020", "000016012", "000016004", "000015997", "000015989", "000015970", "000015962", "000015954", "000015946", "000015938", "00001592x", "000015911", "000015903", "00001589x", "000015881", "000015873", "000015865", "000015857", "000015849", "000015830", "000015822", "000015814", "000015806", "000015792", "000015784", "000015776", "000015768", "00001575x", "000015741", "000015733", "000015725", "000015717", "000015709", "000015695", "000015687", "000015679", "000015660", "000015652", "000015644", "000015636", "000015628", "00001561x", "000015601", "000015598", "00001558x", "000015571", "000015563", "000015555", "000015547", "000015539", "000015520", "000015512", "000015504", "000015490", "000015482", "000015474", "000015466", "000015458", "00001544x", "000015431", "000015423", "000015415", "000015407", "000015393", "000015385", "000015377", "000015369", "000015350", "000015342", "000015334", "000015326", "000015318", "00001530x", "000015296", "000015288", "00001527x", "000015261", "000015253", "000015245", "000015237", "000015229", "000015210", "000015202", "000015199", "000015180", "000015172", "000015164", "000015156", "000015148", "00001513x", "000015121", "000015113", "000015105", "000015091", "000015083", "000015075", "000015067", "000015059", "000015040", "000015032", "000015024", "000015016", "000015008", "000014990", "000014982", "000014974", "000014966", "000014958", "00001494x", "000014931", "000014923", "000014915", "000014907", "000014893", "000014885", "000014877", "000014869", "000014850", "000014842", "000014834", "000014826", "000014818", "00001480x", "000014796", "000014788", "00001477x", "000014761", "000014753", "000014745", "000014737", "000014729", "000014710", "000014702", "000014699", "000014680", "000014672", "000014664", "000014656", "000014648", "00001463x", "000014621", "000014613", "000014605", "000014591", "000014583", "000014575", "000014567", "000014559", "000014540", "000014532", "000014524", "000014516", "000014508", "000014494", "000014486", "000014478", "00001446x", "000014451", "000014443", "000014435", "000014427", "000014419", "000014400", "000014397", "000014389", "000014370", "000014362", "000014354", "000014346", "000014338", "00001432x", "000014311", "000014303", "00001429x", "000014281", "000014273", "000014265", "000014257", "000014249", "000014230", "000014222", "000014214", "000014206", "000014192", "000014184", "000014176", "000014168", "00001415x", "000014141", "000014133", "000014125", "000014117", "000014109", "000014095", "000014087", "000014079", "000014060", "000014052", "000014044", "000014036", "000014028", "00001401x", "000014001", "000013994", "000013986", "000013978", "00001396x", "000013951", "000013943", "000013935", "000013927", "000013919", "000013900", "000013897", "000013889", "000013870", "000013862", "000013854", "000013846", "000013838", "00001382x", "000013811", "000013803", "00001379x", "000013781", "000013773", "000013765", "000013757", "000013749", "000013730", "000013722", "000013714", "000013706", "000013692", "000013684", "000013676", "000013668", "00001365x", "000013641", "000013633", "000013625", "000013617", "000013609", "000013595", "000013587", "000013579", "000013560", "000013552", "000013544", "000013536", "000013528", "00001351x", "000013501", "000013498", "00001348x", "000013471", "000013463", "000013455", "000013447", "000013439", "000013420", "000013412", "000013404", "000013390", "000013382", "000013374", "000013366", "000013358", "00001334x", "000013331", "000013323", "000013315", "000013307", "000013293", "000013285", "000013277", "000013269", "000013250", "000013242", "000013234", "000013226", "000013218", "00001320x", "000013196", "000013188", "00001317x", "000013161", "000013153", "000013145", "000013137", "000013129", "000013110", "000013102", "000013099", "000013080", "000013072", "000013064", "000013056", "000013048", "00001303x", "000013021", "000013013", "000013005", "000012998", "00001298x", "000012971", "000012963", "000012955", "000012947", "000012939", "000012920", "000012912", "000012904", "000012890", "000012882", "000012874", "000012866", "000012858", "00001284x", "000012831", "000012823", "000012815", "000012807", "000012793", "000012785", "000012777", "000012769", "000012750", "000012742", "000012734", "000012726", "000012718", "00001270x", "000012696", "000012688", "00001267x", "000012661", "000012653", "000012645", "000012637", "000012629", "000012610", "000012602", "000012599", "000012580", "000012572", "000012564", "000012556", "000012548", "00001253x", "000012521", "000012513", "000012505", "000012491", "000012483", "000012475", "000012467", "000012459", "000012440", "000012432", "000012424", "000012416", "000012408", "000012394", "000012386", "000012378", "00001236x", "000012351", "000012343", "000012335", "000012327", "000012319", "000012300", "000012297", "000012289", "000012270", "000012262", "000012254", "000012246", "000012238", "00001222x", "000012211", "000012203", "00001219x", "000012181", "000012173", "000012165", "000012157", "000012149", "000012130", "000012122", "000012114", "000012106", "000012092", "000012084", "000012076", "000012068", "00001205x", "000012041", "000012033", "000012025", "000012017", "000012009", "000011991", "000011983", "000011975", "000011967", "000011959", "000011940", "000011932", "000011924", "000011916", "000011908", "000011894", "000011886", "000011878", "00001186x", "000011851", "000011843", "000011835", "000011827", "000011819", "000011800", "000011797", "000011789", "000011770", "000011762", "000011754", "000011746", "000011738", "00001172x", "000011711", "000011703", "00001169x", "000011681", "000011673", "000011665", "000011657", "000011649", "000011630", "000011622", "000011614", "000011606", "000011592", "000011584", "000011576", "000011568", "00001155x", "000011541", "000011533", "000011525", "000011517", "000011509", "000011495", "000011487", "000011479", "000011460", "000011452", "000011444", "000011436", "000011428", "00001141x", "000011401", "000011398", "00001138x", "000011371", "000011363", "000011355", "000011347", "000011339", "000011320", "000011312", "000011304", "000011290", "000011282", "000011274", "000011266", "000011258", "00001124x", "000011231", "000011223", "000011215", "000011207", "000011193", "000011185", "000011177", "000011169", "000011150", "000011142", "000011134", "000011126", "000011118", "00001110x", "000011096", "000011088", "00001107x", "000011061", "000011053", "000011045", "000011037", "000011029", "000011010", "000011002", "000010995", "000010987", "000010979", "000010960", "000010952", "000010944", "000010936", "000010928", "00001091x", "000010901", "000010898", "00001088x", "000010871", "000010863", "000010855", "000010847", "000010839", "000010820", "000010812", "000010804", "000010790", "000010782", "000010774", "000010766", "000010758", "00001074x", "000010731", "000010723", "000010715", "000010707", "000010693", "000010685", "000010677", "000010669", "000010650", "000010642", "000010634", "000010626", "000010618", "00001060x", "000010596", "000010588", "00001057x", "000010561", "000010553", "000010545", "000010537", "000010529", "000010510", "000010502", "000010499", "000010480", "000010472", "000010464", "000010456", "000010448", "00001043x", "000010421", "000010413", "000010405", "000010391", "000010383", "000010375", "000010367", "000010359", "000010340", "000010332", "000010324", "000010316", "000010308", "000010294", "000010286", "000010278", "00001026x", "000010251", "000010243", "000010235", "000010227", "000010219", "000010200", "000010197", "000010189", "000010170", "000010162", "000010154", "000010146", "000010138", "00001012x", "000010111", "000010103", "00001009x", "000010081", "000010073", "000010065", "000010057", "000010049", "000010030", "000010022", "000010014", "000010006", "000009997", "000009989", "000009970", "000009962", "000009954", "000009946", "000009938", "00000992x", "000009911", "000009903", "00000989x", "000009881", "000009873", "000009865", "000009857", "000009849", "000009830", "000009822", "000009814", "000009806", "000009792", "000009784", "000009776", "000009768", "00000975x", "000009741", "000009733", "000009725", "000009717", "000009709", "000009695", "000009687", "000009679", "000009660", "000009652", "000009644", "000009636", "000009628", "00000961x", "000009601", "000009598", "00000958x", "000009571", "000009563", "000009555", "000009547", "000009539", "000009520", "000009512", "000009504", "000009490", "000009482", "000009474", "000009466", "000009458", "00000944x", "000009431", "000009423", "000009415", "000009407", "000009393", "000009385", "000009377", "000009369", "000009350", "000009342", "000009334", "000009326", "000009318", "00000930x", "000009296", "000009288", "00000927x", "000009261", "000009253", "000009245", "000009237", "000009229", "000009210", "000009202", "000009199", "000009180", "000009172", "000009164", "000009156", "000009148", "00000913x", "000009121", "000009113", "000009105", "000009091", "000009083", "000009075", "000009067", "000009059", "000009040", "000009032", "000009024", "000009016", "000009008", "000008990", "000008982", "000008974", "000008966", "000008958", "00000894x", "000008931", "000008923", "000008915", "000008907", "000008893", "000008885", "000008877", "000008869", "000008850", "000008842", "000008834", "000008826", "000008818", "00000880x", "000008796", "000008788", "00000877x", "000008761", "000008753", "000008745", "000008737", "000008729", "000008710", "000008702", "000008699", "000008680", "000008672", "000008664", "000008656", "000008648", "00000863x", "000008621", "000008613", "000008605", "000008591", "000008583", "000008575", "000008567", "000008559", "000008540", "000008532", "000008524", "000008516", "000008508", "000008494", "000008486", "000008478", "00000846x", "000008451", "000008443", "000008435", "000008427", "000008419", "000008400", "000008397", "000008389", "000008370", "000008362", "000008354", "000008346", "000008338", "00000832x", "000008311", "000008303", "00000829x", "000008281", "000008273", "000008265", "000008257", "000008249", "000008230", "000008222", "000008214", "000008206", "000008192", "000008184", "000008176", "000008168", "00000815x", "000008141", "000008133", "000008125", "000008117", "000008109", "000008095", "000008087", "000008079", "000008060", "000008052", "000008044", "000008036", "000008028", "00000801x", "000008001", "000007994", "000007986", "000007978", "00000796x", "000007951", "000007943", "000007935", "000007927", "000007919", "000007900", "000007897", "000007889", "000007870", "000007862", "000007854", "000007846", "000007838", "00000782x", "000007811", "000007803", "00000779x", "000007781", "000007773", "000007765", "000007757", "000007749", "000007730", "000007722", "000007714", "000007706", "000007692", "000007684", "000007676", "000007668", "00000765x", "000007641", "000007633", "000007625", "000007617", "000007609", "000007595", "000007587", "000007579", "000007560", "000007552", "000007544", "000007536", "000007528", "00000751x", "000007501", "000007498", "00000748x", "000007471", "000007463", "000007455", "000007447", "000007439", "000007420", "000007412", "000007404", "000007390", "000007382", "000007374", "000007366", "000007358", "00000734x", "000007331", "000007323", "000007315", "000007307", "000007293", "000007285", "000007277", "000007269", "000007250", "000007242", "000007234", "000007226", "000007218", "00000720x", "000007196", "000007188", "00000717x", "000007161", "000007153", "000007145", "000007137", "000007129", "000007110", "000007102", "000007099", "000007080", "000007072", "000007064", "000007056", "000007048", "00000703x", "000007021", "000007013", "000007005", "000006998", "00000698x", "000006971", "000006963", "000006955", "000006947", "000006939", "000006920", "000006912", "000006904", "000006890", "000006882", "000006874", "000006866", "000006858", "00000684x", "000006831", "000006823", "000006815", "000006807", "000006793", "000006785", "000006777", "000006769", "000006750", "000006742", "000006734", "000006726", "000006718", "00000670x", "000006696", "000006688", "00000667x", "000006661", "000006653", "000006645", "000006637", "000006629", "000006610", "000006602", "000006599", "000006580", "000006572", "000006564", "000006556", "000006548", "00000653x", "000006521", "000006513", "000006505", "000006491", "000006483", "000006475", "000006467", "000006459", "000006440", "000006432", "000006424", "000006416", "000006408", "000006394", "000006386", "000006378", "00000636x", "000006351", "000006343", "000006335", "000006327", "000006319", "000006300", "000006297", "000006289", "000006270", "000006262", "000006254", "000006246", "000006238", "00000622x", "000006211", "000006203", "00000619x", "000006181", "000006173", "000006165", "000006157", "000006149", "000006130", "000006122", "000006114", "000006106", "000006092", "000006084", "000006076", "000006068", "00000605x", "000006041", "000006033", "000006025", "000006017", "000006009", "000005991", "000005983", "000005975", "000005967", "000005959", "000005940", "000005932", "000005924", "000005916", "000005908", "000005894", "000005886", "000005878", "00000586x", "000005851", "000005843", "000005835", "000005827", "000005819", "000005800", "000005797", "000005789", "000005770", "000005762", "000005754", "000005746", "000005738", "00000572x", "000005711", "000005703", "00000569x", "000005681", "000005673", "000005665", "000005657", "000005649", "000005630", "000005622", "000005614", "000005606", "000005592", "000005584", "000005576", "000005568", "00000555x", "000005541", "000005533", "000005525", "000005517", "000005509", "000005495", "000005487", "000005479", "000005460", "000005452", "000005444", "000005436", "000005428", "00000541x", "000005401", "000005398", "00000538x", "000005371", "000005363", "000005355", "000005347", "000005339", "000005320", "000005312", "000005304", "000005290", "000005282", "000005274", "000005266", "000005258", "00000524x", "000005231", "000005223", "000005215", "000005207", "000005193", "000005185", "000005177", "000005169", "000005150", "000005142", "000005134", "000005126", "000005118", "00000510x", "000005096", "000005088", "00000507x", "000005061", "000005053", "000005045", "000005037", "000005029", "000005010", "000005002", "000004995", "000004987", "000004979", "000004960", "000004952", "000004944", "000004936", "000004928", "00000491x", "000004901", "000004898", "00000488x", "000004871", "000004863", "000004855", "000004847", "000004839", "000004820", "000004812", "000004804", "000004790", "000004782", "000004774", "000004766", "000004758", "00000474x", "000004731", "000004723", "000004715", "000004707", "000004693", "000004685", "000004677", "000004669", "000004650", "000004642", "000004634", "000004626", "000004618", "00000460x", "000004596", "000004588", "00000457x", "000004561", "000004553", "000004545", "000004537", "000004529", "000004510", "000004502", "000004499", "000004480", "000004472", "000004464", "000004456", "000004448", "00000443x", "000004421", "000004413", "000004405", "000004391", "000004383", "000004375", "000004367", "000004359", "000004340", "000004332", "000004324", "000004316", "000004308", "000004294", "000004286", "000004278", "00000426x", "000004251");
		
		if(is_string($validValues)) {
			$validValues = strpos($validValues, ',') ? explode(',',$validValues) : $validValues;
			if(!is_array($validValues)) return;
		}
		
		foreach ($needles as $value) {
			echo key($value);
			if(in_array($value, $validValues)) {
				$returnArray[] = $value;
			} else {
			}
		}
		
		return $returnArray;

	}

}

?>