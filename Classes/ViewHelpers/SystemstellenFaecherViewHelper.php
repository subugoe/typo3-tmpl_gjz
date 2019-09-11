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

/**
 * View Helper to return array of classification and frequencies.
 */

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class SystemstellenFaecherViewHelper extends AbstractViewHelper
{
    /**
     * Registers own arguments.
     */
    public function initializeArguments()
    {
        parent::initializeArguments();
        $this->registerArgument('beginn', 'int', 'The int to extract the year of publication begin from');
        $this->registerArgument('ende', 'int', 'The int to extract the year of publication end from');
    }

    /**
     * @return array
     */
    public function render()
    {
        // $open = fopen("http://gjz-test.localhost/fileadmin/user_upload/res/systematikWarmup/faecher/systemstellenFaecherArray_total.txt", "r");
        $open = fopen('./fileadmin/user_upload/res/systematikWarmup/faecher/systemstellenFaecherArray_total.txt', 'r');
        fclose($open);
        if ($open) {
            // $strArr = file_get_contents('http://gjz-test.localhost/fileadmin/user_upload/res/systematikWarmup/faecher/systemstellenFaecherArray_total.txt');
            $strArr = file_get_contents('./fileadmin/user_upload/res/systematikWarmup/faecher/systemstellenFaecherArray_total.txt');

            return $strArr;
        } else {
            $url = null;
            $includeHeader = false;
            $requestHeaders = false;
            $report = null;
            $xml = null;
            $sxe = null;
            $faecherCountArray = [];

            /* @years : length of publication period */
            if ($this->arguments['beginn']) {
                $pubBegin = $this->arguments['beginn'];
            }
            if ($this->arguments['ende']) {
                $pubEnd = $this->arguments['ende'];
            }
            $years = ($pubEnd - $pubBegin) + 1;

            $faecher = ['WISSENSCHAFTSKUNDE', 'PHILOLOGIE', 'THEOLOGIE', 'JURISPRUDENZ', 'MEDIZIN', 'PHILOSOPHIE', 'P*DAGOGIK', 'STAATSWISSENSCHAFTEN', 'KRIEGSWISSENSCHAFTEN', 'NATURKUNDE', 'TECHNOLOGIE', 'MATHEMATIK', 'GEOGRAPHIE', 'GESCHICHTE', 'BILDENDE', 'LITER*R', 'VERMISCHTE'];
            $faecherClean = ['Wissenschaftskunde', 'Philologie', 'Theologie', 'Jurisprudenz', 'Medizin und Pharmazie', 'Philosophie', 'Pädagogik', 'Staatswissenschaften', 'Kriegswissenschaften', 'Naturkunde', 'Technologie und Gewerbekunde', 'Mathematik', 'Geographie', 'Geschichte', 'Bildende Kunst, schöne Literatur, Musik', 'Literär-/Gelehrtengeschichte', 'Vermischte Schriften'];
            $faecherCleanAbbrevs = ['Wiss.', 'Philol.', 'Theol.', 'Jur.', 'Med.', 'Phil.', 'Päd.', 'Pol.', 'Mil.', 'Nat.', 'Tech.', 'Math.', 'Geo.', 'Gesch.', 'Kü.', 'Lit.', 'Verm.'];
            $faecherCountArrayDim2 = array_fill(0, 16, '');
            $faecherCountArrayDim3 = array_fill(0, $years, '');

            for ($y = 0; $y < $years; ++$y) {
                $year = $pubBegin + $y;

                for ($i = 0; $i < count($faecher); ++$i) {
                    $url = 'http://gjz18solr.tc.sub.uni-goettingen.de/solr410-adw/adw/select?q=pd_Datensatztyp%3AArtikel&fq=i011_sa%3A%22'.$year.'%22+d045Q01sa%3A'.$faecher[$i].'*&rows=0&fl=d045Q01sa&wt=xml&indent=true';
                    $xml = GeneralUtility::getUrl($url, $includeHeader, $requestHeaders, $report);
                    if (null == $xml) {
                        $fachCount[0] = 0;
                    } else {
                        $sxe = new \SimpleXMLElement($xml);
                        $fachCount = $sxe->xpath("//response/result[@name='response']/@numFound");
                    }
                    $faecherCountArray[$i] = $fachCount[0];
                }

                for ($c = 0; $c < 17; ++$c) {
                    $faecherCountArrayDim2[$c] = [$faecherCleanAbbrevs[$c], $faecherCountArray[$c]];
                }

                $faecherCountArrayDim3[$y] = $faecherCountArrayDim2;
            }

            $strArr = '';
            for ($bar = 0; $bar < $years; ++$bar) {
                if (0 != $bar) {
                    $strArr .= ', ';
                }
                for ($foo = 0; $foo < 17; ++$foo) {
                    if (0 == $foo) {
                        $strArr .= '[ ';
                    }
                    $strArr .= "['".($faecherCountArrayDim3[$bar][$foo][0]."', ".$faecherCountArrayDim3[$bar][$foo][1].']');
                    if (16 == $foo) {
                        $strArr .= ' ]';
                    } else {
                        $strArr .= ', ';
                    }
                }
            }

            return $strArr;
        }
    }
}
