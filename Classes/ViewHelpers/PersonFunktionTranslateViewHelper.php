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

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;


/**
 * View Helper to translate strings from an array and return a string for display.
 */
class PersonFunktionTranslateViewHelper extends AbstractViewHelper {


	/**
	 * Register arguments.
	 * @return void
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}

	

	/**
	 * @return string|int|boolean|array
	 */
	public function render() {
		$result = NULL;

		$validValues = array("Verf.", "erm. Verf.", "mutmaßl. Verf.", "VerfasserIn", "erm. VerfasserIn", "mutmaßl. VerfasserIn", "Hrsg.", "erm. Hrsg.", "mutmaßl. Hrsg.", "HerausgeberIn", "erm. HerausgeberIn", "mutmaßl. HerausgeberIn", "Verf. Ill.", "erm. Verf. Ill.", "mutmaßl. Verf. Ill.", "VerfasserIn Ill.", "erm. VerfasserIn Ill.", "mutmaßl. VerfasserIn Ill.", "VerfasserIn Illustration", "erm. VerfasserIn Illustration", "mutmaßl. VerfasserIn Illustration", "VerfasserIn der Illustration", "erm. VerfasserIn der Illustration", "mutmaßl. VerfasserIn der Illustration", "Ill.", "erm. Ill.", "mutmaßl. Ill.", "IllustratorIn", "erm. IllustratorIn", "mutmaßl. IllustratorIn", "Übers.", "erm. Übers.", "mutmaßl. Übers.", "ÜbersetzerIn", "erm. ÜbersetzerIn", "mutmaßl. ÜbersetzerIn", "Bearb.", "erm. Bearb.", "mutmaßl. Bearb.", "Bearbeiter", "erm. Bearbeiter", "mutmaßl. Bearbeiter", "BearbeiterIn", "erm. BearbeiterIn", "mutmaßl. BearbeiterIn", "Vorr.", "erm. Vorr.", "mutmaßl. Vorr.", "VerfasserIn eines Vorworts", "erm. VerfasserIn eines Vorworts", "mutmaßl. VerfasserIn eines Vorworts", "Komm.", "erm. Komm.", "mutmaßl. Komm.", "KommentatorIn", "erm. KommentatorIn", "mutmaßl. KommentatorIn", "MitwirkendeR", "erm. MitwirkendeR", "mutmaßl. MitwirkendeR", "Verf. rez. Werk", "erm. Verf. rez. Werk", "mutmaßl. Verf. rez. Werk", "Hrsg. rez. Werk", "Ill. rez. Werk", "Übers. rez. Werk", "Bearb. rez. Werk", "Vorr. rez. Werk", "Präses", "erm. Präses", "mutmaßl. Präses", "Praeses", "erm. Praeses", "mutmaßl. Praeses", "Resp.", "erm. Resp.", "mutmaßl. Resp.", "RespondentIn", "erm. RespondentIn", "mutmaßl. RespondentIn", "Widmungsempfänger", "erm. Widmungsempfänger", "mutmaßl. Widmungsempfänger", "WidmungsempfängerIn", "erm. WidmungsempfängerIn", "mutmaßl. WidmungsempfängerIn", "KomponistIn", "erm. KomponistIn", "mutmaßl. KomponistIn", "AdressatIn", "erm. AdressatIn", "mutmaßl. AdressatIn");
		$translatedValues = array("Verfasser", "ermittelter Verfasser", "mutmaßlicher Verfasser", "Verfasser", "ermittelter Verfasser", "mutmaßlicher Verfasser", "Herausgeber", "ermittelter Herausgeber", "mutmaßlicher Herausgeber", "Herausgeber", "ermittelter Herausgeber", "mutmaßlicher Herausgeber", "Verfasser der Illustration", "ermittelter Verfasser der Illustration", "mutmaßlicher Verfasser der Illustration", "Verfasser der Illustration", "ermittelter Verfasser der Illustration", "mutmaßlicher Verfasser der Illustration", "Verfasser der Illustration", "ermittelter Verfasser der Illustration", "mutmaßlicher Verfasser der Illustration", "Verfasser der Illustration", "ermittelter Verfasser der Illustration", "mutmaßlicher Verfasser der Illustration", "Illustrator", "ermittelter Illustrator", "mutmaßlicher Illustrator", "Illustrator", "ermittelter Illustrator", "mutmaßlicher Illustrator", "Übersetzer", "ermittelter Übersetzer", "mutmaßlicher Übersetzer", "Übersetzer", "ermittelter Übersetzer", "mutmaßlicher Übersetzer", "Bearbeiter", "ermittelter Bearbeiter", "mutmaßlicher Bearbeiter", "Bearbeiter", "ermittelter Bearbeiter", "mutmaßlicher Bearbeiter", "Bearbeiter", "ermittelter Bearbeiter", "mutmaßlicher Bearbeiter", "Verfasser des Vorwortes", "ermittelter Verfasser des Vorwortes", "mutmaßlicher Verfasser des Vorwortes", "Verfasser des Vorwortes", "ermittelter Verfasser des Vorwortes", "mutmaßlicher Verfasser des Vorwortes", "Kommentator", "ermittelter Kommentator", "mutmaßlicher Kommentator", "Kommentator", "ermittelter Kommentator", "mutmaßlicher Kommentator", "Mitwirkender", "ermittelter Mitwirkender", "mutmaßlicher Mitwirkender", "Verfasser", "ermittelter Verfasser", "mutmaßlicher Verfasser", "Herausgeber", "Illustrator", "Übersetzer", "Bearbeiter", "Verfasser des Vorwortes", "Präses", "ermittelter Präses", "mutmaßlicher Präses", "Präses", "ermittelter Präses", "mutmaßlicher Präses", "Respondent", "ermittelter Respondent", "mutmaßlicher Respondent", "Respondent", "ermittelter Respondent", "mutmaßlicher Respondent", "Widmungsempfänger", "ermittelter Widmungsempfänger", "mutmaßlicher Widmungsempfänger", "Widmungsempfänger", "ermittelter Widmungsempfänger", "mutmaßlicher Widmungsempfänger", "Komponist", "ermittelter Komponist", "mutmaßlicher Komponist", "Adressat", "ermittelter Adressat", "mutmaßlicher Adressat");

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		$src = (string)$result;

		if(is_string($src)) {
			if(strpos($src, ',')) {
				$src = strpos($src, ',') ? explode(',',$src) : $src;
			}
			elseif(strpos($src, ';')) {
				$src = strpos($src, ';') ? explode(';',$src) : $src;
			}
			if(!is_array($src)) $src = (array)$src;
		}

		foreach ($src as $key => $value) {
			$valueTrimmed = trim($value);
			if(in_array($valueTrimmed, $validValues)) {
				$validValuesKey = array_search($valueTrimmed, $validValues);
				$translatedSRC[] .= $translatedValues[$validValuesKey];
			} else {
				$translatedSRC[] .= $valueTrimmed;
			}
		}

		for ($i=0; $i<count($translatedSRC); $i++) {
			$translatedSrcCleanString .= $translatedSRC[$i];
			if ( $i < count($translatedSRC)-1 ) {
				$translatedSrcCleanString .= ", ";
			}
		}

		return $translatedSrcCleanString;
	}

}

?>
