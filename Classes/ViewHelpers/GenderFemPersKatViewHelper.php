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
class GenderFemPersKatViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array1', 'array', 'The array 1 to extract the value from', TRUE);
		$this->registerArgument('array2', 'array', 'The array 2 to extract the value from', TRUE);
		$this->registerArgument('array3', 'array', 'The array 3 to extract the value from', TRUE);
		$this->registerArgument('array4', 'array', 'The array 4 to extract the value from', TRUE);
		$this->registerArgument('array5', 'array', 'The array 5 to extract the value from', TRUE);
		$this->registerArgument('array6', 'array', 'The array 6 to extract the value from', TRUE);
		$this->registerArgument('array7', 'array', 'The array 7 to extract the value from', TRUE);
		$this->registerArgument('array8', 'array', 'The array 8 to extract the value from', TRUE);
		$this->registerArgument('array9', 'array', 'The array 9 to extract the value from', TRUE);
		$this->registerArgument('array10', 'array', 'The array 10 to extract the value from', TRUE);
		$this->registerArgument('array11', 'array', 'The array 11 to extract the value from', TRUE);
		$this->registerArgument('array12', 'array', 'The array 12 to extract the value from', TRUE);
		$this->registerArgument('array13', 'array', 'The array 13 to extract the value from', TRUE);
		$this->registerArgument('array14', 'array', 'The array 14 to extract the value from', TRUE);
		$this->registerArgument('array15', 'array', 'The array 15 to extract the value from', TRUE);
		$this->registerArgument('array16', 'array', 'The array 16 to extract the value from', TRUE);
		$this->registerArgument('array17', 'array', 'The array 17 to extract the value from', TRUE);
		$this->registerArgument('array18', 'array', 'The array 18 to extract the value from', TRUE);
		$this->registerArgument('array19', 'array', 'The array 19 to extract the value from', TRUE);
		$this->registerArgument('array20', 'array', 'The array 20 to extract the value from', TRUE);
		$this->registerArgument('array21', 'array', 'The array 21 to extract the value from', TRUE);
		$this->registerArgument('array22', 'array', 'The array 22 to extract the value from', TRUE);
		$this->registerArgument('array23', 'array', 'The array 23 to extract the value from', TRUE);
		$this->registerArgument('array24', 'array', 'The array 24 to extract the value from', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {

		if ($this->arguments['array1']) { $resultArr[] = $this->arguments['array1']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array2']) { $resultArr[] = $this->arguments['array2']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array3']) { $resultArr[] = $this->arguments['array3']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array4']) { $resultArr[] = $this->arguments['array4']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array5']) { $resultArr[] = $this->arguments['array5']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array6']) { $resultArr[] = $this->arguments['array6']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array7']) { $resultArr[] = $this->arguments['array7']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array8']) { $resultArr[] = $this->arguments['array8']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array9']) { $resultArr[] = $this->arguments['array9']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array10']) { $resultArr[] = $this->arguments['array10']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array11']) { $resultArr[] = $this->arguments['array11']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array12']) { $resultArr[] = $this->arguments['array12']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array13']) { $resultArr[] = $this->arguments['array13']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array14']) { $resultArr[] = $this->arguments['array14']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array15']) { $resultArr[] = $this->arguments['array15']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array16']) { $resultArr[] = $this->arguments['array16']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array17']) { $resultArr[] = $this->arguments['array17']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array18']) { $resultArr[] = $this->arguments['array18']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array19']) { $resultArr[] = $this->arguments['array19']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array20']) { $resultArr[] = $this->arguments['array20']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array21']) { $resultArr[] = $this->arguments['array21']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array22']) { $resultArr[] = $this->arguments['array22']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array23']) { $resultArr[] = $this->arguments['array23']; } else { $resultArr[] = "empty"; }
		if ($this->arguments['array24']) { $resultArr[] = $this->arguments['array24']; } else { $resultArr[] = "empty"; }

		for ($i=0; $i<count($resultArr); $i++) {
			if ($resultArr[$i][0] == '(-gen-f-)') {
				$go = $i;
				return "TRUE";
			}
		}
	}

}
unset($resultArr, $go);
?>