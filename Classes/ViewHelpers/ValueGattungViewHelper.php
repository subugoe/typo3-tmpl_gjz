<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2013 Sven-S. Porst, Göttingen State and University Library
 *                <porst@sub.uni-goettingen.de>
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
class ValueGattungViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
		$this->registerArgument('type', 'string', 'A switch to handle GATTUNG _or_ WERKFORMSPEZIFIKATION', TRUE);
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

		$switch = $this->arguments['type'];

		if ($switch == "0") {
			foreach ($result as $r0 => $valueR0) {
				if ((preg_match('/Auszug/', $result[$r0])) || (preg_match('/Bearbeitung/', $result[$r0])) || (preg_match('/Kompilation/', $result[$r0])) || (preg_match('/Prospectus/', $result[$r0])) || (preg_match('/Übersetzung/', $result[$r0]))) {
					unset($result[$r0]);
				}
			}
			$result = array_values($result);
			if ($result != NULL) {
				return $result;
			} else return;
		} elseif ($switch == "1") {
			foreach ($result as $r1 => $valueR1) {
				if ((preg_match('/Auszug/', $result[$r1])) || (preg_match('/Bearbeitung/', $result[$r1])) || (preg_match('/Kompilation/', $result[$r1])) || (preg_match('/Prospectus/', $result[$r1])) || (preg_match('/Übersetzung/', $result[$r1]))) {
				} else {
					unset($result[$r1]);
				}
			}
			$result = array_values($result);
			if ($result != NULL) {
				return $result;
			} else return;
		} else {
			return $result;
		}
	}

}

?>