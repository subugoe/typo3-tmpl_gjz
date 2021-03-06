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
 * View Helper to return the value of a key in an array.
 */
class HorLinkLabelValidationViewHelper extends AbstractViewHelper {


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
		$validLabels = array("Replik zu:", "Replik:", "Fortsetzung von:", "Fortsetzung:", "Nachtrag:", "[Replik zu]", "[Replik]", "[Fortsetzung von]", "[Fortsetzung]", "[Nachtrag]");
		$invalidLabels = array("Bezug:", "[Bezug]");

		$wholeString = $result;

		for ($i=0; $i<count($validLabels); $i++) {
			if ( strpos($wholeString, $validLabels[$i]) !== FALSE ) {
				$labelDone = 1;
			}
		}
		
		if ($labelDone != 1) {
			for ($j=0; $j<count($invalidLabels); $j++) {
				if ( strpos($wholeString, $invalidLabels[$j]) !== FALSE ) {
					$labelDone = -1;
				}
			}
		}

		if ( $labelDone == 1) {
			return "valid";
		}
		else {
			return "invalid";
		}

	}

}

?>
