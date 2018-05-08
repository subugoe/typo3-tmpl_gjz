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

/**
 * View Helper to return the value of a key in an array.
 */
class HorLinkLabelViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
	
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		$labelDone = 0;
		$labelsBegin = array("Replik zu:", "Replik:", "Fortsetzung von:", "Fortsetzung:", "Nachtrag:");
		$labelsEnd = array("[Replik zu]", "[Replik]", "[Fortsetzung von]", "[Fortsetzung]", "[Nachtrag]");

		$wholeString = $result;
		
		preg_match('/[0-9]{9}/', $wholeString, $match);
		if ( $match[0] == "") {
			preg_match('/[0-9]{8}[A-Z]{1}/', $wholeString, $match);
		}
		$ppn = $match[0];
		$sub = str_replace($ppn, "", $wholeString);

		for ($i=0; $i<count($labelsBegin); $i++) {
			if ( strpos($sub, $labelsBegin[$i]) !== FALSE ) {
				$label = $labelsBegin[$i];
				$label = str_replace(":", "", $label);
				return $label;
				$labelDone = 1;
			}
		}

		if ( $labelDone == 0 ) {
			for ($i=0; $i<count($labelsEnd); $i++) {
				if ( strpos($sub, $labelsEnd[$i]) !== FALSE ) {
					$label = $labelsEnd[$i];
					$label = str_replace("[", "", $label);
					$label = str_replace("]", "", $label);
					return $label;
					$labelDone = 1;
				}
			}
		}
		
		if ( $labelDone == 0 ) {
			return "verknüpfter Datensatz";
		}

		$labelDone = 0;
		
	}

}

?>