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
class RolesArrayViewHelper extends AbstractViewHelper {


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

		$roleArray = array();
		$restString = $result[0];

		if ( $restString!='' ) {
			$firstChr = (string)substr($restString, 0, 1);
			while ( ($firstChr == ";") OR ($firstChr == ",") OR ($firstChr == " ") ) {
				$restString = (string)substr($restString, 1);
				$firstChr = (string)substr($restString, 0, 1);
			}
			$lastChr = (string)substr($restString, strlen($restString)-1, 1);
			while ( ($lastChr == ";") OR ($lastChr == ",") OR ($lastChr == " ") ) {
				$restString = (string)substr($restString, 0, -1);
				$lastChr = (string)substr($restString, strlen($restString)-1, 1);
			}
		}
		else return;

		if ( (strpos($restString, ";")!==FALSE) OR (strpos($restString, ",")!==FALSE) ) {
			$checkBreak = 0;
			while ($checkBreak != 1) {
				if ( strpos($restString, ";") ) {
					$roleArray[] = (string)substr($restString, 0, strpos($restString, ";"));
					$restString = (string)substr($restString, strpos($restString, ";")+1);
				}
				elseif ( strpos($restString, ",") ) {
					$roleArray[] = (string)substr($restString, 0, strpos($restString, ","));
					$restString = (string)substr($restString, strpos($restString, ",")+1);
				}
				else {
					$roleArray[] = $restString;
					$checkBreak = 1;
				}
			}
		}
		else $roleArray[] = $restString;

		for ($i=0; $i<count($roleArray); $i++) {
			$firstChrArrElement = (string)substr($roleArray[$i], 0, 1);
			while ( $firstChrArrElement == " " ) {
				$roleArray[$i] = (string)substr($roleArray[$i], 1);
				$firstChrArrElement = (string)substr($roleArray[$i], 0, 1);
			}
			$lastChrArrElement = (string)substr($roleArray[$i], strlen($roleArray[$i])-1, 1);
			while ( $lastChrArrElement == " " ) {
				$roleArray[$i] = (string)substr($roleArray[$i], 0, -1);
				$lastChrArrElement = (string)substr($roleArray[$i], strlen($roleArray[$i])-1, 1);
			}
		}
		
		return $roleArray;

	}

}

?>
