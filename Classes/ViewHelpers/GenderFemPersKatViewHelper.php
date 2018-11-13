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
class GenderFemPersKatViewHelper extends AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array1', 'array', 'The array 1 to extract the value from', TRUE);
		$this->registerArgument('array2', 'array', 'The array 2 to extract the value from', TRUE);
		$this->registerArgument('array3', 'array', 'The array 3 to extract the value from', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {

		$resultClean = NULL;

		if ($this->arguments['array1']) { $resultArr[] = $this->arguments['array1']; } else { $resultArr[] = ["empty"]; }
		if ($this->arguments['array2']) { $resultArr[] = $this->arguments['array2']; } else { $resultArr[] = ["empty"]; }
		if ($this->arguments['array3']) { $resultArr[] = $this->arguments['array3']; } else { $resultArr[] = ["empty"]; }

		for ($i=0; $i<count($resultArr); $i++) {
			for ($j=0; $j<count($resultArr[$i]); $j++) {
				if(strpos($resultArr[$i][$j], "(-gen-f-)")) {
					$resultClean[] .= $resultArr[$i][$j];
				}
			}
		}

		return $resultClean;

	}

}
unset($resultArr, $resultClean);
?>
