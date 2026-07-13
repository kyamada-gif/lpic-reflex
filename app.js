/* 自動生成: build.js（app.jsx -> app.js）。手で編集せず app.jsx を直して再ビルド。 */
const { useState, useEffect, useMemo, useRef, useCallback } = React;
const QUESTIONS = [{
  "id": 3,
  "source": "模試",
  "type": "single",
  "question": "System V initを使用する場合、Linuxカーネルがブート時に最初に起動するプログラムは何ですか？",
  "choices": [{
    "label": "A",
    "text": "/lib/init.so"
  }, {
    "label": "B",
    "text": "/proc/sys/kernel/init"
  }, {
    "label": "C",
    "text": "/etc/rc.d/rcinit"
  }, {
    "label": "D",
    "text": "/sbin/init"
  }, {
    "label": "E",
    "text": "/boot/init"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "System V initを使用する場合、Linuxカーネルがブート時に最初に起動するプログラム",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["System V initを"],
  "answerTexts": ["/sbin/init"],
  "answerHints": ["/sbin"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 6,
  "source": "模試",
  "type": "multi",
  "question": "System V init 構成に次の2つのシンボリックリンクがあるとします:\n/etc/rc1.d/K01apache2\n/etc/rc2.d/S02apache2\nこれらのリンクによって参照されるスクリプトはいつ実行されますか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "ランレベル2に入ると、S02apache2が実行されます。"
  }, {
    "label": "B",
    "text": "ランレベル2を離れるとS02apache2が実行されます。"
  }, {
    "label": "C",
    "text": "Kは非アクティブ化されたサービスを示しているため、K01apache2は実行されません。"
  }, {
    "label": "D",
    "text": "システムのシャットダウン中に、S02apache2とK01apache2の両方が実行されます。"
  }, {
    "label": "E",
    "text": "ランレベル1に入ると、K01apache2が実行されます。"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "System V init 構成に次の2つのシンボリックリンクがあるとします:\n/etc/rc1.d/K01apache2",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["System V init 構成に"],
  "answerTexts": ["ランレベル2に入ると、S02apache2が実行されます。", "ランレベル1に入ると、K01apache2が実行されます。"],
  "answerHints": ["ランレベル2に", "ランレベル1"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 19,
  "source": "模試",
  "type": "single",
  "question": "Linuxシステムで電源管理イベントを処理するデーモンはどれですか？",
  "choices": [{
    "label": "A",
    "text": "acpid"
  }, {
    "label": "B",
    "text": "batteryd"
  }, {
    "label": "C",
    "text": "pwrmgntd"
  }, {
    "label": "D",
    "text": "psd"
  }, {
    "label": "E",
    "text": "inetd"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "Linuxシステムで電源管理イベントを処理するデーモン",
  "decisionKey": "",
  "mnemonic": "電源（AC=エーシー）→ acpid。電源のACでacpid。",
  "answerKeys": ["Linuxシステム"],
  "answerTexts": ["acpid"],
  "answerHints": ["acpid"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 24,
  "source": "模試",
  "type": "fill",
  "question": "空欄を埋めてください - デフォルトの実行レベルを設定するために一般的に使用される System V init 構成ファイルはどれですか？（パスを含むファイルの完全な名前を指定してください。）",
  "choices": [],
  "answer": ["/etc/inittab"],
  "selectCount": 1,
  "identifyHint": "空欄を埋めてください - デフォルトの実行レベルを設定するために一般的に使用される System V init 構成ファイル",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["空欄を埋めてください - デフォルト"],
  "answerTexts": ["/etc/inittab"],
  "answerHints": ["/etc/inittab"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 36,
  "source": "模試",
  "type": "multi",
  "question": "lspciコマンドは、システムハードウェアについてどのような情報を表示できますか？(3つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "システムバッテリーの種類"
  }, {
    "label": "B",
    "text": "デバイスのIRQ設定"
  }, {
    "label": "C",
    "text": "PCIバス速度"
  }, {
    "label": "D",
    "text": "イーサネットMACアドレス"
  }, {
    "label": "E",
    "text": "デバイスベンダーの識別"
  }],
  "answer": ["B", "C", "E"],
  "selectCount": 3,
  "identifyHint": "lspciコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["lspci"],
  "answerTexts": ["デバイスのIRQ設定", "PCIバス速度", "デバイスベンダーの識別"],
  "answerHints": ["デバイス", "PCI", "デバイスベンダー"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 50,
  "source": "模試",
  "type": "single",
  "question": "EFIシステムパーティションには何が含まれていますか？",
  "choices": [{
    "label": "A",
    "text": "Linuxルートファイルシステム"
  }, {
    "label": "B",
    "text": "第一段階ブートローダー"
  }, {
    "label": "C",
    "text": "デフォルトのスワップスペースファイル"
  }, {
    "label": "D",
    "text": "Linuxのデフォルトシェルバイナリ"
  }, {
    "label": "E",
    "text": "ユーザーのホームディレクトリ"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "EFIシステムパーティション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["EFI"],
  "answerTexts": ["第一段階ブートローダー"],
  "answerHints": ["第一段階"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 52,
  "source": "模試",
  "type": "multi",
  "question": "カーネルリングバッファの内容はいつリセットされますか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "リングバッファがコマンド dmesg --clearを使用して明示的にリセットされた場合"
  }, {
    "label": "B",
    "text": "dmesgを使用して追加パラメータなしでリングバッファを読み取る場合"
  }, {
    "label": "C",
    "text": "設定可能な時間（デフォルトでは15分）が経過したとき"
  }, {
    "label": "D",
    "text": "カーネルが以前にアンロードされたカーネルモジュールをロードするとき"
  }, {
    "label": "E",
    "text": "システムがシャットダウンまたは再起動されたとき"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "カーネルリングバッファの内容はいつリセット",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["カーネルリングバッファ"],
  "answerTexts": ["リングバッファがコマンド dmesg --clearを使用して明示的にリセットされた場合", "システムがシャットダウンまたは再起動されたとき"],
  "answerHints": ["リングバッファ", "システム"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 53,
  "source": "模試",
  "type": "single",
  "question": "カーネルモジュールの不具合により、ネットワークインターフェースカードに問題が発生しています。システム起動時にこのモジュールが自動的にロードされないようにするには、次のどのアクションを実行すればよいですか？",
  "choices": [{
    "label": "A",
    "text": "特定のモジュール名を指定せずに lsmod --remove --autoclean を使用する"
  }, {
    "label": "B",
    "text": "modinfo -k に続いて問題のあるモジュールの名前を使用する"
  }, {
    "label": "C",
    "text": "modprobe -r に続いて問題のあるモジュールの名前を使用する"
  }, {
    "label": "D",
    "text": "問題のあるモジュールの名前を含むブラックリスト行をファイル /etc/modprobe.d/blacklist.conf に追加する"
  }, {
    "label": "E",
    "text": "ファイルシステムからカーネルモジュールのディレクトリを削除し、モジュールを含むカーネルを再コンパイルする"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "カーネルモジュールの不具合により、ネットワークインターフェースカードに問題が発生しています。システム起動時にこのモジュールが自動的にロードされないように",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["カーネルモジュール"],
  "answerTexts": ["問題のあるモジュールの名前を含むブラックリスト行をファイル /etc/modprobe.d/blacklist.conf に追加する"],
  "answerHints": ["問題のある"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 54,
  "source": "模試",
  "type": "multi",
  "question": "BIOSを使用したPCのブートシーケンスについて正しい記述はどれですか（2つ選択してください）。",
  "choices": [{
    "label": "A",
    "text": "ブートプロセスの一部はBIOSから設定できます"
  }, {
    "label": "B",
    "text": "Linuxはコンピュータを起動するのにBIOSの支援を必要としない"
  }, {
    "label": "C",
    "text": "BIOSブートプロセスは、ハードディスクなどの二次記憶装置が機能している場合にのみ開始されます。"
  }, {
    "label": "D",
    "text": "BIOSはコンピュータの電源投入後にブートプロセスを開始します。"
  }, {
    "label": "E",
    "text": "BIOSはハードディスクなどの二次記憶装置からハードウェアドライバをロードして起動します。"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "BIOSを使用したPCのブートシーケンス",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["BIOSを"],
  "answerTexts": ["ブートプロセスの一部はBIOSから設定できます", "BIOSはコンピュータの電源投入後にブートプロセスを開始します。"],
  "answerHints": ["ブートプロセス", "BIOSはコンピュータ"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 56,
  "source": "模試",
  "type": "fill",
  "question": "空欄を埋めてください - /proc ファイルシステム内のどのファイルに、ブートローダからカーネルに渡されるパラメータがリストされていますか？（パスなしでファイル名のみを指定してください。）",
  "choices": [],
  "answer": ["cmdline"],
  "selectCount": 1,
  "identifyHint": "空欄を埋めてください - /proc ファイルシステム内のどのファイルに、ブートローダからカーネルに渡されるパラメータがリスト",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["空欄を埋めてください - /"],
  "answerTexts": ["cmdline"],
  "answerHints": ["cmdline"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 93,
  "source": "模試",
  "type": "multi",
  "question": "Linux のブート プロセスに関係する初期 RAM ディスクについて正しい記述はどれですか（2つ選択してください）。",
  "choices": [{
    "label": "A",
    "text": "initramfs は圧縮されたファイル システム アーカイブであり、解凍してその内容を調べることができます。"
  }, {
    "label": "B",
    "text": "initramfs ファイルには、MBR、ブートローダー、Linux カーネルが含まれています。"
  }, {
    "label": "C",
    "text": "起動が成功すると、initramfs の内容が /run/initramfs/ で利用できるようになります。"
  }, {
    "label": "D",
    "text": "カーネルは、実際のルート ファイル システムにアクセスする前に、一時的に initramfs を使用します。"
  }, {
    "label": "E",
    "text": "initramfs は特定のカーネル バージョンに依存せず、初期インストール後は変更されません。"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "Linux のブート プロセスに関係する初期 RAM ディスク",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Linux のブート プロセス"],
  "answerTexts": ["initramfs は圧縮されたファイル システム アーカイブであり、解凍してその内容を調べることができます。", "カーネルは、実際のルート ファイル システムにアクセスする前に、一時的に initramfs を使用します。"],
  "answerHints": ["initramfs は圧縮された", "カーネル"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 94,
  "source": "模試",
  "type": "single",
  "question": "ハードディスクからの起動時に、コンピュータは Linux カーネルと initramfs を正常にロードしますが、その後の起動タスクでハングします。問題を調査するため、Linux ベースのレスキュー CD を使用してシステムを起動します。問題の根本原因を特定するのに役立つ方法は次のうちどれですか？",
  "choices": [{
    "label": "A",
    "text": "レスキュー CD のシェルから dmesg コマンドを使用して、元のシステムのブート ログを表示します。"
  }, {
    "label": "B",
    "text": "コンピュータのハードディスク上のファイル /proc/kmsg にエラーがないか調査します。"
  }, {
    "label": "C",
    "text": "コンピュータのハードディスク上のファイル /var/log を調べてエラーの可能性を調べます。"
  }, {
    "label": "D",
    "text": "chroot を使用してハード ディスク上のファイル システムに切り替え、dmesg を使用してログを表示します。"
  }, {
    "label": "E",
    "text": "システムがレスキュー CD から正常に起動したため、ハード ドライブから再度再起動します。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ハードディスクからの起動時に、コンピュータは Linux カーネルと initramfs を正常にロードしますが、その後の起動タスクでハングします。問題を調査するため、Linux ベースのレスキュー CD を使用してシステムを起動",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ハードディスクからの"],
  "answerTexts": ["コンピュータのハードディスク上のファイル /var/log を調べてエラーの可能性を調べます。"],
  "answerHints": ["コンピュータのハードディスク上のファイル /var"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 96,
  "source": "模試",
  "type": "single",
  "question": "UEFI システムのハードディスク上のブートローダーはどこに保存されますか？",
  "choices": [{
    "label": "A",
    "text": "EFI ブート レコード (EBR) 内。"
  }, {
    "label": "B",
    "text": "マスター ブート レコード (MBR) 内。"
  }, {
    "label": "C",
    "text": "EFI システム パーティション (ESP) 上。"
  }, {
    "label": "D",
    "text": "boot というラベルの付いたパーティション上。"
  }, {
    "label": "E",
    "text": "パーティション番号 127。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "UEFI システムのハードディスク上のブートローダー",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["UEFI システム"],
  "answerTexts": ["EFI システム パーティション (ESP) 上。"],
  "answerHints": ["EFI システム"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 99,
  "source": "模試",
  "type": "single",
  "question": "デフォルトの systemd ブートターゲットをマルチユーザーに設定する正しい方法は何ですか？",
  "choices": [{
    "label": "A",
    "text": "systemctl isolate multi-user.target"
  }, {
    "label": "B",
    "text": "systemctl set-runlevel multi-user.target"
  }, {
    "label": "C",
    "text": "systemctl set-boot multi-user.target"
  }, {
    "label": "D",
    "text": "systemctl set-default multi-user.target"
  }, {
    "label": "E",
    "text": "systemctl boot -p multi-user.target"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "デフォルトの systemd ブートターゲットをマルチユーザーに設定",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["デフォルト"],
  "answerTexts": ["systemctl set-default multi-user.target"],
  "answerHints": ["systemctl set-default"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 109,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、必要な依存モジュールとともにカーネル モジュールをロードするものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "depmod"
  }, {
    "label": "B",
    "text": "modprobe"
  }, {
    "label": "C",
    "text": "module_install"
  }, {
    "label": "D",
    "text": "insmod"
  }, {
    "label": "E",
    "text": "loadmod"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、必要な依存モジュールとともにカーネル モジュールをロード",
  "decisionKey": "",
  "mnemonic": "依存もまとめてロードは modprobe。「依存をmod（まとめ）てprobe（探って）入れる」。",
  "answerKeys": ["次のコマンドのうち、必要な"],
  "answerTexts": ["modprobe"],
  "answerHints": ["modprobe"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 111,
  "source": "模試",
  "type": "multi",
  "question": "UEFI ファームウェアに関して正しいのは次のうちどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "パーティション テーブルを読み取って解釈できる"
  }, {
    "label": "B",
    "text": "特定のファイルシステムの使用と読み取りが可能"
  }, {
    "label": "C",
    "text": "全ての設定を /boot/ パーティションに保存する"
  }, {
    "label": "D",
    "text": "GPT メタデータ内の特別な領域に保存する"
  }, {
    "label": "E",
    "text": "固定されたブート ディスクの位置からロードされます"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "UEFI ファームウェア",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["UEFI ファームウェア"],
  "answerTexts": ["パーティション テーブルを読み取って解釈できる", "特定のファイルシステムの使用と読み取りが可能"],
  "answerHints": ["パーティション", "特定の"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 115,
  "source": "模試",
  "type": "multi",
  "question": "/boot/ ファイルシステムにあるファイルは次のどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "Linux カーネル イメージ"
  }, {
    "label": "B",
    "text": "Bash シェル バイナリ"
  }, {
    "label": "C",
    "text": "systemd ターゲットとサービス ユニット"
  }, {
    "label": "D",
    "text": "初期 RAM ディスク イメージ"
  }, {
    "label": "E",
    "text": "fsck バイナリ"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "/boot/ ファイルシステムにあるファイル",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/boot"],
  "answerTexts": ["Linux カーネル イメージ", "初期 RAM ディスク イメージ"],
  "answerHints": ["Linux", "初期"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 5,
  "source": "模試",
  "type": "multi",
  "question": "yumの設定に関して正しいのは次のうちどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "リポジトリ設定の変更は、yum confupdateの実行後に有効になります。"
  }, {
    "label": "B",
    "text": "yum設定の変更はyumdサービスの再起動後に有効になります"
  }, {
    "label": "C",
    "text": "パッケージリポジトリの設定は複数のファイルに分割できる"
  }, {
    "label": "D",
    "text": "リポジトリ設定には$basearchや$releaseverなどの変数を含めることができます"
  }, {
    "label": "E",
    "text": "/etc/yum.repos.d/にファイルが含まれている場合、/etc/yum.confは無視されます"
  }],
  "answer": ["C", "D"],
  "selectCount": 2,
  "identifyHint": "yumの設定",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["yumの"],
  "answerTexts": ["パッケージリポジトリの設定は複数のファイルに分割できる", "リポジトリ設定には$basearchや$releaseverなどの変数を含めることができます"],
  "answerHints": ["パッケージリポジトリ", "リポジトリ設定には"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 8,
  "source": "模試",
  "type": "single",
  "question": "RPMパッケージ管理を使用しているときに、現在インストールされているすべてのパッケージを一覧表示するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "yum --query --all"
  }, {
    "label": "B",
    "text": "yum --list --installed"
  }, {
    "label": "C",
    "text": "rpm --query --list"
  }, {
    "label": "D",
    "text": "rpm --list --installed"
  }, {
    "label": "E",
    "text": "rpm --query --all"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "RPMパッケージ管理を使用しているときに、現在インストールされているすべてのパッケージを一覧表示",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["RPMパッケージ管理を"],
  "answerTexts": ["rpm --query --all"],
  "answerHints": ["rpm --query --all"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 20,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、GRUBブートファイルを現在アクティブなファイルシステムにインストールし、ブートローダーを最初のディスクの最初のパーティションにインストールするものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "grub-install /dev/sda"
  }, {
    "label": "B",
    "text": "grub-install /dev/sda1"
  }, {
    "label": "C",
    "text": "grub-install current /dev/sda0"
  }, {
    "label": "D",
    "text": "grub-install /dev/sda0"
  }, {
    "label": "E",
    "text": "grub-install current /dev/sda1"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、GRUBブートファイルを現在アクティブなファイルシステムにインストールし、ブートローダーを最初のディスクの最初のパーティションにインストール",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、GRUB"],
  "answerTexts": ["grub-install /dev/sda1"],
  "answerHints": ["grub-install /dev/sda1"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 28,
  "source": "模試",
  "type": "fill",
  "question": "空白を記入 - 追加のyumリポジトリの構成ファイルはどのディレクトリに保存されていますか？（ディレクトリへのフルパスを指定します。）",
  "choices": [],
  "answer": ["/etc/yum.repos.d/"],
  "selectCount": 1,
  "identifyHint": "空白を記入 - 追加のyumリポジトリの構成ファイル",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["空白を記入"],
  "answerTexts": ["/etc/yum.repos.d/"],
  "answerHints": ["/etc/yum.repos.d/"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 33,
  "source": "模試",
  "type": "multi",
  "question": "Linuxコンテナと従来の仮想マシン（LXCとKVMなど）を比較した場合、正しい記述は次のうちどれですか（3つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "コンテナは、カーネルがプロセスの分離とリソース管理を制御する軽量の仮想化方法です。"
  }, {
    "label": "B",
    "text": "完全に仮想化されたマシンでは、仮想マシン内の特定のハードウェアアーキテクチャ用の任意のオペレーティングシステムを実行できます。"
  }, {
    "label": "C",
    "text": "コンテナはホストシステムの物理ハードウェアから完全に分離されており、エミュレートされた仮想ハードウェアデバイスのみを使用できます。"
  }, {
    "label": "D",
    "text": "完全に仮想化されたマシンのゲスト環境は、仮想およびエミュレートされたハードウェアデバイスを提供するハイパーバイザーによって作成されます。"
  }, {
    "label": "E",
    "text": "コンテナハイパーバイザーが個別のカーネル実行を作成するため、同じホスト上のコンテナは異なるオペレーティングシステムを使用できます。"
  }],
  "answer": ["A", "B", "D"],
  "selectCount": 3,
  "identifyHint": "Linuxコンテナと従来の仮想マシン",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Linuxコンテナ"],
  "answerTexts": ["コンテナは、カーネルがプロセスの分離とリソース管理を制御する軽量の仮想化方法です。", "完全に仮想化されたマシンでは、仮想マシン内の特定のハードウェアアーキテクチャ用の任意のオペレーティングシステムを実行できます。", "完全に仮想化されたマシンのゲスト環境は、仮想およびエミュレートされたハードウェアデバイスを提供するハイパーバイザーによって作成されます。"],
  "answerHints": ["コンテナは、", "完全に", "完全に"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 41,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、RPMパッケージファイル foo.rpm の依存関係を一覧表示するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "rpm -qpR foo.rpm"
  }, {
    "label": "B",
    "text": "rpm -dep foo"
  }, {
    "label": "C",
    "text": "rpm -ld foo.rpm"
  }, {
    "label": "D",
    "text": "rpm -R foo.rpm"
  }, {
    "label": "E",
    "text": "rpm -pD foo"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、RPMパッケージファイル foo.rpm の依存関係を一覧表示",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、RPM"],
  "answerTexts": ["rpm -qpR foo.rpm"],
  "answerHints": ["rpm -qpR"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 42,
  "source": "模試",
  "type": "single",
  "question": "パッケージをアンインストールするが、パッケージが再インストールされた場合に備えて構成ファイルを保持するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "dpkg -s pkgname"
  }, {
    "label": "B",
    "text": "dpkg -L pkgname"
  }, {
    "label": "C",
    "text": "dpkg -P pkgname"
  }, {
    "label": "D",
    "text": "dpkg -v pkgname"
  }, {
    "label": "E",
    "text": "dpkg -r pkgname"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "パッケージをアンインストールするが、パッケージが再インストールされた場合に備えて構成ファイルを保持",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パッケージ"],
  "answerTexts": ["dpkg -r pkgname"],
  "answerHints": ["dpkg -r"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 43,
  "source": "模試",
  "type": "single",
  "question": "次のapt-getサブコマンドのうち、現在インストールされているすべてのパッケージの最新バージョンをインストールするものはどれですか？",
  "choices": [{
    "label": "A",
    "text": "auto-update"
  }, {
    "label": "B",
    "text": "dist-upgrade"
  }, {
    "label": "C",
    "text": "full-upgrade"
  }, {
    "label": "D",
    "text": "install"
  }, {
    "label": "E",
    "text": "update"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次のapt-getサブコマンドのうち、現在インストールされているすべてのパッケージの最新バージョンをインストール",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のapt"],
  "answerTexts": ["dist-upgrade"],
  "answerHints": ["dist"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 45,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、3番目のハードディスクのマスター ブート レコードに GRUB 2 をインストールするものはどれですか",
  "choices": [{
    "label": "A",
    "text": "grub2 install /dev/sdc"
  }, {
    "label": "B",
    "text": "grub-mkrescue /dev/sdc"
  }, {
    "label": "C",
    "text": "grub-mbrinstall /dev/sdc"
  }, {
    "label": "D",
    "text": "grub-setup /dev/sdc"
  }, {
    "label": "E",
    "text": "grub-install /dev/sdc"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、3番目のハードディスクのマスター ブート レコードに GRUB 2 をインストール",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、3"],
  "answerTexts": ["grub-install /dev/sdc"],
  "answerHints": ["grub-install"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 46,
  "source": "模試",
  "type": "multi",
  "question": "仮想マシンのクローンを作成するときに、Linuxシステムの次のプロパティのうちどれを変更する必要がありますか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "パーティションスキーム"
  }, {
    "label": "B",
    "text": "ファイルシステム"
  }, {
    "label": "C",
    "text": "D-BusマシンID"
  }, {
    "label": "D",
    "text": "/rootの権限"
  }, {
    "label": "E",
    "text": "SSHホストキー"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "仮想マシンのクローンを作成するときに、Linuxシステムの次のプロパティ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["仮想"],
  "answerTexts": ["D-BusマシンID", "SSHホストキー"],
  "answerHints": ["D", "SSH"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 47,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、名前が文字列fooで終わるすべてのパッケージをインストールするのはどれですか？",
  "choices": [{
    "label": "A",
    "text": "zypper get '*foo'"
  }, {
    "label": "B",
    "text": "zypper update 'foo?'"
  }, {
    "label": "C",
    "text": "zypper force 'foo*'"
  }, {
    "label": "D",
    "text": "zypper install '*foo'"
  }, {
    "label": "E",
    "text": "zypper add '.*foo'"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、名前が文字列fooで終わるすべてのパッケージをインストール",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、名前が"],
  "answerTexts": ["zypper install '*foo'"],
  "answerHints": ["zypper install"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 48,
  "source": "模試",
  "type": "multi",
  "question": "標準のGRUB 2インストールには、次のどのファイルが存在しますか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "/boot/grub/stages/stage0"
  }, {
    "label": "B",
    "text": "/boot/grub/i386-pc/lvm.mod"
  }, {
    "label": "C",
    "text": "/boot/grub/fstab"
  }, {
    "label": "D",
    "text": "/boot/grub/grub.cfg"
  }, {
    "label": "E",
    "text": "/boot/grub/linux/vmlinuz"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "標準のGRUB 2インストールには、次のどのファイルが存在",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["標準の"],
  "answerTexts": ["/boot/grub/i386-pc/lvm.mod", "/boot/grub/grub.cfg"],
  "answerHints": ["/boot/grub/i386", "/boot/grub/grub"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 49,
  "source": "模試",
  "type": "multi",
  "question": "64ビットLinuxシステムの次のディレクトリのうち、通常共有ライブラリが含まれるのはどれですか（2つ選択してください）。",
  "choices": [{
    "label": "A",
    "text": "~/.lib64/"
  }, {
    "label": "B",
    "text": "/usr/lib64/"
  }, {
    "label": "C",
    "text": "/var/lib64/"
  }, {
    "label": "D",
    "text": "/lib64/"
  }, {
    "label": "E",
    "text": "/opt/lib64/"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "64ビットLinuxシステムの次のディレクトリのうち、通常共有ライブラリが含まれる",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["64"],
  "answerTexts": ["/usr/lib64/", "/lib64/"],
  "answerHints": ["/usr", "/lib64"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 51,
  "source": "模試",
  "type": "single",
  "question": "Debianパッケージはインストール中に複数のファイルを作成します。次のコマンドのうち、/etc/debian_versionファイルを所有するパッケージを検索するものはどれですか？",
  "choices": [{
    "label": "A",
    "text": "apt-get search /etc/debian_version"
  }, {
    "label": "B",
    "text": "apt -r /etc/debian_version"
  }, {
    "label": "C",
    "text": "find /etc/debian_version -dpkg"
  }, {
    "label": "D",
    "text": "dpkg -S /etc/debian_version"
  }, {
    "label": "E",
    "text": "apt-file /etc/debian_version"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "Debianパッケージはインストール中に複数のファイルを作成します。次のコマンドのうち、/etc/debian_versionファイルを所有するパッケージを検索",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Debianパッケージは"],
  "answerTexts": ["dpkg -S /etc/debian_version"],
  "answerHints": ["dpkg"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 92,
  "source": "模試",
  "type": "single",
  "question": "yum リポジトリは関連するパッケージのセットを宣言できます。admintools グループに属するすべてのパッケージをインストールする yum コマンドはどれですか？",
  "choices": [{
    "label": "A",
    "text": "yum pkgset --install admintools"
  }, {
    "label": "B",
    "text": "yum install admintools/*"
  }, {
    "label": "C",
    "text": "yum groupinstall admintools"
  }, {
    "label": "D",
    "text": "yum taskinstall admintools"
  }, {
    "label": "E",
    "text": "yum collection install admintools"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "yum リポジトリは関連するパッケージのセットを宣言できます。admintools グループに属するすべてのパッケージをインストール",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["yum リポジトリは"],
  "answerTexts": ["yum groupinstall admintools"],
  "answerHints": ["yum groupinstall"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 103,
  "source": "模試",
  "type": "single",
  "question": "ldd コマンドの目的は何ですか？",
  "choices": [{
    "label": "A",
    "text": "バイナリを実行するために必要な共有ライブラリをリストします。"
  }, {
    "label": "B",
    "text": "インストールされている共有ライブラリをインストールおよび更新します。"
  }, {
    "label": "C",
    "text": "動的にリンクされたバイナリを静的バイナリに変換します。"
  }, {
    "label": "D",
    "text": "デフォルトで使用するライブラリのバージョンを定義します。"
  }, {
    "label": "E",
    "text": "代替ライブラリ検索パスを使用してバイナリを実行します。"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "ldd コマンドの目的",
  "decisionKey": "",
  "mnemonic": "ldd＝list dynamic dependencies。「依存ライブラリをlist」する。",
  "answerKeys": ["ldd"],
  "answerTexts": ["バイナリを実行するために必要な共有ライブラリをリストします。"],
  "answerHints": ["バイナリ"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 104,
  "source": "模試",
  "type": "multi",
  "question": "GRUB 2 構成ファイルで有効なコマンドはどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "menuentry"
  }, {
    "label": "B",
    "text": "uefi"
  }, {
    "label": "C",
    "text": "pxe-ifconfig"
  }, {
    "label": "D",
    "text": "insmod"
  }, {
    "label": "E",
    "text": "kpartx"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "GRUB 2 構成ファイルで有効なコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["GRUB"],
  "answerTexts": ["menuentry", "insmod"],
  "answerHints": ["menuentry", "insmod"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 105,
  "source": "模試",
  "type": "single",
  "question": "依存関係が満たされていないため、ローカル Debian パッケージのインストールに失敗しました。不足している依存関係をインストールし、中断されたパッケージのインストールを完了するコマンドはどれですか？",
  "choices": [{
    "label": "A",
    "text": "dpkg --fix --all"
  }, {
    "label": "B",
    "text": "apt-get autoinstall"
  }, {
    "label": "C",
    "text": "dpkg-reconfigure --all"
  }, {
    "label": "D",
    "text": "apt-get all"
  }, {
    "label": "E",
    "text": "apt-get install -f"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "依存関係が満たされていないため、ローカル Debian パッケージのインストールに失敗しました。不足している依存関係をインストールし、中断されたパッケージのインストールを完了する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["依存関係が"],
  "answerTexts": ["apt-get install -f"],
  "answerHints": ["apt-get install"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 106,
  "source": "模試",
  "type": "single",
  "question": "Debian パッケージ マネージャーがソフトウェア パッケージをダウンロードするネットワークの場所を定義するファイルはどれですか？",
  "choices": [{
    "label": "A",
    "text": "/etc/dpkg/dpkg.cfg"
  }, {
    "label": "B",
    "text": "/etc/apt/apt.conf.d"
  }, {
    "label": "C",
    "text": "/etc/apt/apt.conf"
  }, {
    "label": "D",
    "text": "/etc/dpkg/dselect.cfg"
  }, {
    "label": "E",
    "text": "/etc/apt/sources.list"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "Debian パッケージ マネージャーがソフトウェア パッケージをダウンロードするネットワークの場所を定義するファイル",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Debian パッケージ マネージャー"],
  "answerTexts": ["/etc/apt/sources.list"],
  "answerHints": ["/etc/apt/sources"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 107,
  "source": "模試",
  "type": "single",
  "question": "dpkg パッケージ管理を使用してシステム上のパッケージを削除する場合、どの dpkg オプションによって構成ファイルも確実に削除されますか？",
  "choices": [{
    "label": "A",
    "text": "--clean"
  }, {
    "label": "B",
    "text": "--purge"
  }, {
    "label": "C",
    "text": "--vacuum"
  }, {
    "label": "D",
    "text": "--remove"
  }, {
    "label": "E",
    "text": "--declare"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "dpkg パッケージ管理を使用してシステム上のパッケージを削除する場合、どの dpkg オプションによって構成ファイルも確実に削除されます",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dpkg パッケージ"],
  "answerTexts": ["--purge"],
  "answerHints": ["--purge"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 1,
  "source": "模試",
  "type": "multi",
  "question": "特定のファイルのinode番号を表示するために使用できるコマンドはどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "inode"
  }, {
    "label": "B",
    "text": "ln"
  }, {
    "label": "C",
    "text": "ls"
  }, {
    "label": "D",
    "text": "cp"
  }, {
    "label": "E",
    "text": "stat"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "特定のファイルのinode番号を表示する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["特定の"],
  "answerTexts": ["ls", "stat"],
  "answerHints": ["ls", "stat"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 2,
  "source": "模試",
  "type": "single",
  "question": "Bashでは、コマンドの後に 1>&2 を挿入すると「なに」が「どこ」へリダイレクトされますか？",
  "choices": [{
    "label": "A",
    "text": "標準エラーを標準入力に出力します。"
  }, {
    "label": "B",
    "text": "標準出力を標準エラーに出力します。"
  }, {
    "label": "C",
    "text": "標準入力を標準エラーに変換します。"
  }, {
    "label": "D",
    "text": "標準エラーを標準出力に出力します。"
  }, {
    "label": "E",
    "text": "標準出力を標準入力に。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "Bashでは、コマンドの後に 1>&2 を挿入すると",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Bashでは"],
  "answerTexts": ["標準出力を標準エラーに出力します。"],
  "answerHints": ["標準出力を標準エラー"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 7,
  "source": "模試",
  "type": "multi",
  "question": "Bashシェルを使用しているときに現在の作業ディレクトリを出力するコマンドはどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "echo \"${PWD}\""
  }, {
    "label": "B",
    "text": "echo \"${WD}\""
  }, {
    "label": "C",
    "text": "printwd"
  }, {
    "label": "D",
    "text": "pwd"
  }, {
    "label": "E",
    "text": "echo \"${pwd}\""
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "Bashシェルを使用しているときに現在の作業ディレクトリを出力する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Bashシェルを"],
  "answerTexts": ["echo \"${PWD}\"", "pwd"],
  "answerHints": ["echo \"${PWD", "pwd"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 9,
  "source": "模試",
  "type": "single",
  "question": "viエディタでは、カーソルの移動や行をバッファーにコピーするなどのコマンドを複数回発行したり、複数の行に適用するにはどうすればよいですか？",
  "choices": [{
    "label": "A",
    "text": ":repeatコマンドに続けて数字とコマンドを入力する"
  }, {
    "label": "B",
    "text": "4l や 2yj のように、コマンドの直前に数字を指定します。"
  }, {
    "label": "C",
    "text": "コマンドを適用する前に、Shiftキーとカーソルキーを使用して影響を受けるすべての行を選択します。"
  }, {
    "label": "D",
    "text": ":set repetition=4 などのコマンドを発行すると、後続のコマンドが4回繰り返されます。"
  }, {
    "label": "E",
    "text": "14 や yj2 などのコマンドの後に数字を指定して、その後にエスケープキーを押します。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "viエディタでは、カーソルの移動や行をバッファーにコピーするなどのコマンドを複数回発行したり、複数の行に適用する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["viエディタでは"],
  "answerTexts": ["4l や 2yj のように、コマンドの直前に数字を指定します。"],
  "answerHints": ["4l"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 10,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、セクション1のマニュアルページコマンドを表示するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "man command(1)"
  }, {
    "label": "B",
    "text": "man command#1"
  }, {
    "label": "C",
    "text": "man 1 command"
  }, {
    "label": "D",
    "text": "man 1.command"
  }, {
    "label": "E",
    "text": "man -s 1 command"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、セクション1のマニュアルページコマンドを表示する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、セクション"],
  "answerTexts": ["man 1 command"],
  "answerHints": ["man 1 command"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 13,
  "source": "模試",
  "type": "multi",
  "question": "viエディタが開いているドキュメントを保存してエディタを終了するシーケンスは次のどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "Ctrl + XX"
  }, {
    "label": "B",
    "text": "Ctrl + W"
  }, {
    "label": "C",
    "text": "Esc zz"
  }, {
    "label": "D",
    "text": "Esc :wq"
  }, {
    "label": "E",
    "text": "Esc ZZ"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "viエディタが開いているドキュメントを保存してエディタを終了するシーケンス",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["viエディタが"],
  "answerTexts": ["Esc :wq", "Esc ZZ"],
  "answerHints": ["Esc :wq", "Esc ZZ"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 18,
  "source": "模試",
  "type": "multi",
  "question": "完全なパスを指定せずにコマンドを開始したときに、現在のシェルが実行する実行可能ファイルの完全なパスを表示できるツールはどれですか。(2つ選択してください)",
  "choices": [{
    "label": "A",
    "text": "find"
  }, {
    "label": "B",
    "text": "pwd"
  }, {
    "label": "C",
    "text": "which"
  }, {
    "label": "D",
    "text": "locate"
  }, {
    "label": "E",
    "text": "type"
  }],
  "answer": ["C", "E"],
  "selectCount": 2,
  "identifyHint": "完全なパスを指定せずにコマンドを開始したときに、現在のシェルが実行する実行可能ファイルの完全なパスを表示",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["完全な"],
  "answerTexts": ["which", "type"],
  "answerHints": ["which", "type"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 26,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、テキストファイル userlist.txt 内のすべての CR-LF 改行を Linux 標準の LF 改行に変更し、その結果を newlist.txt に保存するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "tr -d '\\r' < userlist.txt > newlist.txt"
  }, {
    "label": "B",
    "text": "tr -c '\\r\\n' '' userlist.txt newlist.txt"
  }, {
    "label": "C",
    "text": "tr '\\r' '\\n' newlist.txt"
  }, {
    "label": "D",
    "text": "tr '\\r\\n' '\\n' userlist.txt newlist.txt"
  }, {
    "label": "E",
    "text": "tr -s '/^M/^J/' userlist.txt newlist.txt"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、テキストファイル userlist.txt 内のすべての CR-LF 改行を Linux 標準の LF 改行に変更",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、テキストファイル"],
  "answerTexts": ["tr -d '\\r' < userlist.txt > newlist.txt"],
  "answerHints": ["tr -d"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 32,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、シェルにテキストを出力するのはどれですか？",
  "choices": [{
    "label": "A",
    "text": "cat test EOT -"
  }, {
    "label": "B",
    "text": "cat <|EOT test EOT -"
  }, {
    "label": "C",
    "text": "cat !test EOT -"
  }, {
    "label": "D",
    "text": "cat &test EOT -"
  }, {
    "label": "E",
    "text": "cat <test EOT -"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、シェルにテキストを出力する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、シェルに"],
  "answerTexts": ["cat <test EOT -"],
  "answerHints": ["cat <test"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 37,
  "source": "模試",
  "type": "single",
  "question": "次のviコマンドのうち、現在の行と次の行の2行を削除するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "d2"
  }, {
    "label": "B",
    "text": "2d"
  }, {
    "label": "C",
    "text": "2dd"
  }, {
    "label": "D",
    "text": "dd2"
  }, {
    "label": "E",
    "text": "de12"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次のviコマンドのうち、現在の行と次の行の2行を削除",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のvi"],
  "answerTexts": ["2dd"],
  "answerHints": ["2dd"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 38,
  "source": "模試",
  "type": "multi",
  "question": "次のうち、Bash内で有効なストリーム リダイレクト演算子はどれですか（2つ選択してください）。",
  "choices": [{
    "label": "A",
    "text": "<"
  }, {
    "label": "B",
    "text": "#>"
  }, {
    "label": "C",
    "text": "$>"
  }, {
    "label": "D",
    "text": ">>>"
  }, {
    "label": "E",
    "text": "2>&1"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "次のうち、Bash内で有効なストリーム リダイレクト演算子",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のうち"],
  "answerTexts": ["<", "2>&1"],
  "answerHints": ["<", "2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 57,
  "source": "模試",
  "type": "single",
  "question": "ファイルが存在しない場合の コマンド ls > files に関して正しいのは何ですか？",
  "choices": [{
    "label": "A",
    "text": "lsの出力は端末に印刷されます"
  }, {
    "label": "B",
    "text": "ファイルが作成され、lsの出力が含まれます"
  }, {
    "label": "C",
    "text": "エラーメッセージが表示され、lsは実行されません"
  }, {
    "label": "D",
    "text": "コマンド files が実行され、lsの出力を受け取ります。"
  }, {
    "label": "E",
    "text": "lsの出力はすべて破棄される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "ファイルが存在しない場合の コマンド ls > files",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ファイルが"],
  "answerTexts": ["ファイルが作成され、lsの出力が含まれます"],
  "answerHints": ["ファイル"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 59,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、ls の出力を標準エラーにリダイレクトするものはどれですか？",
  "choices": [{
    "label": "A",
    "text": "ls >-1"
  }, {
    "label": "B",
    "text": "ls <"
  }, {
    "label": "C",
    "text": "ls >&2"
  }, {
    "label": "D",
    "text": "ls >>2"
  }, {
    "label": "E",
    "text": "ls |error"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、ls の出力を標準エラーにリダイレクト",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、ls の出力を"],
  "answerTexts": ["ls >&2"],
  "answerHints": ["ls >&2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 60,
  "source": "模試",
  "type": "single",
  "question": "ユーザーのホームディレクトリにある次のファイルのうち、Bash 履歴が含まれているのはどれですか？",
  "choices": [{
    "label": "A",
    "text": ".bashrc_history"
  }, {
    "label": "B",
    "text": ".bash_histfile"
  }, {
    "label": "C",
    "text": ".history"
  }, {
    "label": "D",
    "text": ".bash_history"
  }, {
    "label": "E",
    "text": ".history_bash"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "ユーザーのホームディレクトリにある次のファイルのうち、Bash 履歴が含まれている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ユーザーの"],
  "answerTexts": [".bash_history"],
  "answerHints": [".bash_history"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 61,
  "source": "模試",
  "type": "single",
  "question": "ファイルが存在しない場合のコマンド ls > files に関して正しいのは何ですか？",
  "choices": [{
    "label": "A",
    "text": "ls の出力は端末に印刷されます"
  }, {
    "label": "B",
    "text": "ファイルが作成され、ls の出力が含まれます"
  }, {
    "label": "C",
    "text": "エラーメッセージが表示され、ls は実行されません"
  }, {
    "label": "D",
    "text": "コマンド files が実行され、ls の出力を受け取ります。"
  }, {
    "label": "E",
    "text": "ls の出力はすべて破棄される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "ファイルが存在しない場合のコマンド ls > files",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ファイルが"],
  "answerTexts": ["ファイルが作成され、ls の出力が含まれます"],
  "answerHints": ["ファイルが作成され、"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 63,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、コマンド foo が呼び出されたときに実行される実行可能ファイルへのパスを表示するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "lsattr foo"
  }, {
    "label": "B",
    "text": "apropos foo"
  }, {
    "label": "C",
    "text": "locate foo"
  }, {
    "label": "D",
    "text": "whatis foo"
  }, {
    "label": "E",
    "text": "which foo"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、コマンド foo が呼び出されたときに実行される実行可能ファイルへのパスを表示",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、コマンド"],
  "answerTexts": ["which foo"],
  "answerHints": ["which"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 64,
  "source": "模試",
  "type": "single",
  "question": "ユーザー fred が次のコマンドを実行すると、どのような出力が表示されますか？\necho 'fred $USER'",
  "choices": [{
    "label": "A",
    "text": "fred fred"
  }, {
    "label": "B",
    "text": "fred /home/fred/"
  }, {
    "label": "C",
    "text": "'fred $USER'"
  }, {
    "label": "D",
    "text": "fred $USER"
  }, {
    "label": "E",
    "text": "'fred fred'"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "ユーザー fred が次のコマンドを実行すると、どのような出力が表示されますか？\necho 'fred $USER'",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ユーザー fred"],
  "answerTexts": ["fred $USER"],
  "answerHints": ["fred $USER"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 65,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、foo コマンドの出力を画面に表示し、それを /tmp/foodata というファイルに書き込むものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "foo | less /tmp/foodata"
  }, {
    "label": "B",
    "text": "foo | cp /tmp/foodata"
  }, {
    "label": "C",
    "text": "foo > /tmp/foodata"
  }, {
    "label": "D",
    "text": "foo | tee /tmp/foodata"
  }, {
    "label": "E",
    "text": "foo > stdout >> /tmp/foodata"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、foo コマンドの出力を画面に表示し、それを /tmp/foodata というファイルに書き込む",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、foo"],
  "answerTexts": ["foo | tee /tmp/foodata"],
  "answerHints": ["foo | tee"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 67,
  "source": "模試",
  "type": "single",
  "question": "現在のファイルを filea.txt として保存するには、vi を終了する前にどのコマンドを入力する必要がありますか？",
  "choices": [{
    "label": "A",
    "text": "%s filea.txt"
  }, {
    "label": "B",
    "text": "%w filea.txt"
  }, {
    "label": "C",
    "text": ":save filea.txt"
  }, {
    "label": "D",
    "text": ":w filea.txt"
  }, {
    "label": "E",
    "text": ":s filea.txt"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "現在のファイルを filea.txt として保存する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["現在のファイル"],
  "answerTexts": [":w filea.txt"],
  "answerHints": [":w"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 68,
  "source": "模試",
  "type": "single",
  "question": "次の入力ストリームがあるとします:\ntxt1.txt\natxt.txt\ntxtB.txt\n次の正規表現のどれが、この入力ストリームを次の出力ストリームに変換しますか？\ntxt1.bak.txt atxt.bak.txt txtB.bak.txt",
  "choices": [{
    "label": "A",
    "text": "s/^.txt/.bak/"
  }, {
    "label": "B",
    "text": "s/txt/bak.txt/"
  }, {
    "label": "C",
    "text": "s/txt$/bak.txt/"
  }, {
    "label": "D",
    "text": "s/^txt$/.bak^/"
  }, {
    "label": "E",
    "text": "s/(.txt)/.bak$1/"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の入力ストリームがあるとします:\ntxt1.txt\natxt.txt\ntxtB.txt\n次の正規表現のどれが、この入力ストリームを次の出力ストリームに変換",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の入力"],
  "answerTexts": ["s/txt$/bak.txt/"],
  "answerHints": ["s/txt$"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 69,
  "source": "模試",
  "type": "single",
  "question": "vi で 3 行のテキストを削除し、カーソルを別の行に移動した直後に、削除した内容を現在の行の下に挿入する1文字のコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "i (lowercase)"
  }, {
    "label": "B",
    "text": "p (lowercase)"
  }, {
    "label": "C",
    "text": "P (uppercase)"
  }, {
    "label": "D",
    "text": "U (uppercase)"
  }, {
    "label": "E",
    "text": "u (lowercase)"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "vi で 3 行のテキストを削除し、カーソルを別の行に移動した直後に、削除した内容を現在の行の下に挿入する1文字のコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["vi で"],
  "answerTexts": ["p (lowercase)"],
  "answerHints": ["p"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 71,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、/etc/passwd ファイルからユーザー名（最初の列）とそのプライマリ グループ（4番目の列）のリストを出力するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "fmt -f 1,4 /etc/passwd"
  }, {
    "label": "B",
    "text": "cut -d -f 1,4 /etc/passwd"
  }, {
    "label": "C",
    "text": "sort -t : -k 1,4 /etc/passwd"
  }, {
    "label": "D",
    "text": "paste -f 1,4 /etc/passwd"
  }, {
    "label": "E",
    "text": "split -c 1,4 /etc/passwd"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、/etc/passwd ファイルからユーザー名（最初の列）とそのプライマリ グループ（4番目の列）のリストを出力",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、/etc/passwd ファイル"],
  "answerTexts": ["cut -d -f 1,4 /etc/passwd"],
  "answerHints": ["cut"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 72,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、ファイルを読み取り、ファイルの内容から指定されたサイズの個別のチャンクを作成するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ar"
  }, {
    "label": "B",
    "text": "cat"
  }, {
    "label": "C",
    "text": "break"
  }, {
    "label": "D",
    "text": "split"
  }, {
    "label": "E",
    "text": "parted"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、ファイルを読み取り、ファイルの内容から指定されたサイズの個別のチャンクを作成",
  "decisionKey": "",
  "mnemonic": "指定サイズで分割＝split。「チャンクにsplit（スプリット＝分割）」。",
  "answerKeys": ["次のコマンドのうち、ファイル"],
  "answerTexts": ["split"],
  "answerHints": ["split"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 73,
  "source": "模試",
  "type": "single",
  "question": "& 文字で終わるコマンドについて正しい記述は次のどれですか？",
  "choices": [{
    "label": "A",
    "text": "コマンドの出力は /dev/null にリダイレクトされます。"
  }, {
    "label": "B",
    "text": "コマンドは現在のシェルのバックグラウンドで実行されます。"
  }, {
    "label": "C",
    "text": "コマンドの出力はシェルによって実行されます。"
  }, {
    "label": "D",
    "text": "コマンドは init プロセスの直接の子として実行されます。"
  }, {
    "label": "E",
    "text": "コマンドの入力は /dev/null から読み取られます。"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "& 文字で終わるコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["&"],
  "answerTexts": ["コマンドは現在のシェルのバックグラウンドで実行されます。"],
  "answerHints": ["コマンドは現在の"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 74,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、/etc/passwd からユーザー名とそのログインシェルのリストを生成するものはどれですか？",
  "choices": [{
    "label": "A",
    "text": "column -s : 1,7 /etc/passwd"
  }, {
    "label": "B",
    "text": "chop -c 1,7 /etc/passwd"
  }, {
    "label": "C",
    "text": "colrm 1,7 /etc/passwd"
  }, {
    "label": "D",
    "text": "sort -t: -k1,7 /etc/passwd"
  }, {
    "label": "E",
    "text": "cut -d: -f1,7 /etc/passwd"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、/etc/passwd からユーザー名とそのログインシェルのリストを生成",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、/etc/passwd から"],
  "answerTexts": ["cut -d: -f1,7 /etc/passwd"],
  "answerHints": ["cut"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 76,
  "source": "模試",
  "type": "single",
  "question": "正規表現を使用してファイルの内容を検索できるコマンドはどれですか？",
  "choices": [{
    "label": "A",
    "text": "find"
  }, {
    "label": "B",
    "text": "locate"
  }, {
    "label": "C",
    "text": "grep"
  }, {
    "label": "D",
    "text": "reqgrep"
  }, {
    "label": "E",
    "text": "pgrep"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "正規表現を使用してファイルの内容を検索",
  "decisionKey": "",
  "mnemonic": "正規表現で中身を検索＝grep。「正規表現といえばgrep」。",
  "answerKeys": ["正規表現を"],
  "answerTexts": ["grep"],
  "answerHints": ["grep"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 77,
  "source": "模試",
  "type": "single",
  "question": "grep コマンドの -v オプションの効果は何ですか？",
  "choices": [{
    "label": "A",
    "text": "一致する部分を色で強調表示できるようになります。"
  }, {
    "label": "B",
    "text": "コマンドのバージョン情報を表示します。"
  }, {
    "label": "C",
    "text": "一致しない行のみを出力します。"
  }, {
    "label": "D",
    "text": "最後に一致した行を最初に表示するように出力順序を変更します。"
  }, {
    "label": "E",
    "text": "すべての行を出力し、一致する行の前に a+ を付けます。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "grep コマンドの -v オプション",
  "decisionKey": "",
  "mnemonic": "grep -v＝反転（inVert）。「vは逆さ、一致しない行だけ出す」。",
  "answerKeys": ["grep コマンドの"],
  "answerTexts": ["一致しない行のみを出力します。"],
  "answerHints": ["一致しない"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 78,
  "source": "模試",
  "type": "single",
  "question": "実行中の Bash シェル内でオプションと位置パラメータを変更するために使用されるコマンドはどれですか？",
  "choices": [{
    "label": "A",
    "text": "history"
  }, {
    "label": "B",
    "text": "setsh"
  }, {
    "label": "C",
    "text": "bashconf"
  }, {
    "label": "D",
    "text": "set"
  }, {
    "label": "E",
    "text": "envsetup"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "実行中の Bash シェル内でオプションと位置パラメータを変更",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["実行中の"],
  "answerTexts": ["set"],
  "answerHints": ["set"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 79,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、ls の出力で data というファイルを作成するか、または既に存在する場合は上書きするコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "ls 3> data"
  }, {
    "label": "B",
    "text": "ls >& data"
  }, {
    "label": "C",
    "text": "ls > data"
  }, {
    "label": "D",
    "text": "ls >> data"
  }, {
    "label": "E",
    "text": "ls >>> data"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、ls の出力で data というファイルを作成するか、または既に存在する場合は上書きする",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、ls の出力で"],
  "answerTexts": ["ls > data"],
  "answerHints": ["ls > data"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 80,
  "source": "模試",
  "type": "single",
  "question": "vi の通常モードでは、テキストの逆方向の検索を開始するためにどの文字を使用できますか？",
  "choices": [{
    "label": "A",
    "text": "r"
  }, {
    "label": "B",
    "text": "/"
  }, {
    "label": "C",
    "text": "F"
  }, {
    "label": "D",
    "text": "?"
  }, {
    "label": "E",
    "text": "s"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "vi の通常モードでは、テキストの逆方向の検索を開始する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["vi の"],
  "answerTexts": ["?"],
  "answerHints": ["?"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 81,
  "source": "模試",
  "type": "single",
  "question": "xargs コマンドの目的は何ですか？",
  "choices": [{
    "label": "A",
    "text": "X サーバーに引数を渡します。"
  }, {
    "label": "B",
    "text": "呼び出しごとに異なるパラメータを使用してコマンドの実行を繰り返します。"
  }, {
    "label": "C",
    "text": "標準入力を読み取り、実行するコマンドを構築します。"
  }, {
    "label": "D",
    "text": "グラフィカルに質問し、その回答をシェルに返します。"
  }, {
    "label": "E",
    "text": "通常は短いオプション（-hなど）しか受け付けないコマンドに長いオプション（--helpなど）を指定できるようにする"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "xargs コマンドの目的",
  "decisionKey": "",
  "mnemonic": "xargs＝標準入力を引数(args)に変えてコマンド構築。「入力をargsに渡す」。",
  "answerKeys": ["xargs コマンドの目的は"],
  "answerTexts": ["標準入力を読み取り、実行するコマンドを構築します。"],
  "answerHints": ["標準入力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 82,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、すべての一般的なファイルタイプに関する情報を含む定義データベースファイルを使用してファイルの形式を決定するものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "type"
  }, {
    "label": "B",
    "text": "file"
  }, {
    "label": "C",
    "text": "magic"
  }, {
    "label": "D",
    "text": "pmagic"
  }, {
    "label": "E",
    "text": "hash"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、すべての一般的なファイルタイプに関する情報を含む定義データベースファイルを使用してファイルの形式を決定する",
  "decisionKey": "",
  "mnemonic": "ファイルの種類を判定＝file。「タイプを知りたきゃそのままfile」。",
  "answerKeys": ["次のコマンドのうち、すべての"],
  "answerTexts": ["file"],
  "answerHints": ["file"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 86,
  "source": "模試",
  "type": "single",
  "question": "DD/MM/YYYY:hh:mm:ss 形式のタイムスタンプを持つログファイル loga.log がある場合、午前 8:00 から午前 8:59 までの期間のすべてのログエントリをフィルター処理するコマンドはどれですか。",
  "choices": [{
    "label": "A",
    "text": "grep -E ':08:[09]+:[09]+' loga.log"
  }, {
    "label": "B",
    "text": "grep -E ':08:[00]+' loga.log"
  }, {
    "label": "C",
    "text": "grep loga.log ':08:[0-9]+:[0-9]+'"
  }, {
    "label": "D",
    "text": "grep loga.log ':08:[0-9]:[0-9]'"
  }, {
    "label": "E",
    "text": "grep -E ':08:[0-9]+:[0-9]+' loga.log"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "DD/MM/YYYY:hh:mm:ss 形式のタイムスタンプを持つログファイル loga.log がある場合、午前 8:00 から午前 8:59 までの期間のすべてのログエントリをフィルター処理する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["DD"],
  "answerTexts": ["grep -E ':08:[0-9]+:[0-9]+' loga.log"],
  "answerHints": ["grep -E ':08:[0-9"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 89,
  "source": "模試",
  "type": "single",
  "question": "正規表現 s/[ABC].[abc].[xx]/ を次の文字列に適用した場合の出力はどうなるでしょうか？\nABCabc-",
  "choices": [{
    "label": "A",
    "text": "ABxxbc"
  }, {
    "label": "B",
    "text": "xxCxxc"
  }, {
    "label": "C",
    "text": "xxxxxx"
  }, {
    "label": "D",
    "text": "ABCabc"
  }, {
    "label": "E",
    "text": "Axxxxx"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "正規表現 s/[ABC].[abc].[xx]/",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["正規表現 s"],
  "answerTexts": ["ABCabc"],
  "answerHints": ["ABCabc"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 95,
  "source": "模試",
  "type": "single",
  "question": "ユーザーが誤ってホームディレクトリにサブディレクトリ \\dir を作成しました。そのディレクトリを削除するには、次のコマンドのうちどれを使用しますか？",
  "choices": [{
    "label": "A",
    "text": "rmdir ~/\\\\dir"
  }, {
    "label": "B",
    "text": "rmdir \"~/\\dir\""
  }, {
    "label": "C",
    "text": "rmdir ~/'dir'"
  }, {
    "label": "D",
    "text": "rmdir ~/\\dir"
  }, {
    "label": "E",
    "text": "rmdir '~/\\dir'"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "ユーザーが誤ってホームディレクトリにサブディレクトリ \\dir を作成しました。そのディレクトリを削除する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ユーザーが"],
  "answerTexts": ["rmdir ~/\\\\dir"],
  "answerHints": ["rmdir ~/\\\\dir"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 108,
  "source": "模試",
  "type": "single",
  "question": "次の正規表現のうち、単一の大文字を表すものはどれですか？",
  "choices": [{
    "label": "A",
    "text": ":UPPER:"
  }, {
    "label": "B",
    "text": "[A-Z]"
  }, {
    "label": "C",
    "text": "!a-z"
  }, {
    "label": "D",
    "text": "%C"
  }, {
    "label": "E",
    "text": "(AZ)"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の正規表現のうち、単一の大文字を表す",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の正規表現のうち"],
  "answerTexts": ["[A-Z]"],
  "answerHints": ["[A"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 112,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、シェルが特定のコマンドを処理する方法を示すものはどれですか。",
  "choices": [{
    "label": "A",
    "text": "where"
  }, {
    "label": "B",
    "text": "type"
  }, {
    "label": "C",
    "text": "stat"
  }, {
    "label": "D",
    "text": "case"
  }, {
    "label": "E",
    "text": "fileinfo"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、シェルが特定のコマンドを処理する方法を示す",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、シェルが"],
  "answerTexts": ["type"],
  "answerHints": ["type"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 116,
  "source": "模試",
  "type": "multi",
  "question": "Bash シェルから、サブシェルを起動せずにファイル /usr/local/bin/runme.sh からの命令を直接実行するコマンドはどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "source /usr/local/bin/runme.sh"
  }, {
    "label": "B",
    "text": "/usr/local/bin/runme.sh"
  }, {
    "label": "C",
    "text": "/bin/bash /usr/local/bin/runme.sh"
  }, {
    "label": "D",
    "text": ". /usr/local/bin/runme.sh"
  }, {
    "label": "E",
    "text": "run /usr/local/bin/runme.sh"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "Bash シェルから、サブシェルを起動せずにファイル /usr/local/bin/runme.sh からの命令を直接実行する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Bash シェルから"],
  "answerTexts": ["source /usr/local/bin/runme.sh", ". /usr/local/bin/runme.sh"],
  "answerHints": ["source", "."],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 4,
  "source": "模試",
  "type": "single",
  "question": "dbmaint & コマンドを使用して、dbmaintをバックグラウンドで実行しました。しかし、ログアウトすると dbmaintは終了します。プログラム実行者がログアウトした後も dbmaintの実行を継続するにはどう呼び出しますか？",
  "choices": [{
    "label": "A",
    "text": "job -b dbmaint"
  }, {
    "label": "B",
    "text": "dbmaint 6>/dev/pts/null"
  }, {
    "label": "C",
    "text": "nohup dbmaint &"
  }, {
    "label": "D",
    "text": "bg dbmaint"
  }, {
    "label": "E",
    "text": "wait dbmaint"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "dbmaint & コマンドを使用して、dbmaintをバックグラウンドで実行しました。しかし、ログアウトすると dbmaintは終了します。プログラム実行者がログアウトした後も dbmaintの実行を継続する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dbmaint"],
  "answerTexts": ["nohup dbmaint &"],
  "answerHints": ["nohup"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 12,
  "source": "模試",
  "type": "multi",
  "question": "バックアップソフトウェアは、2回のバックアップ実行間で変更されていないファイル間のハードリンクを頻繁に使用します。これらのハードリンクによってどのような利点が得られますか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "古いバックアップは、新しいバックアップのハードリンクターゲットとして機能しながら、テープなどの低速のバックアップメディアに移動できます。"
  }, {
    "label": "B",
    "text": "ハードリンクは非同期操作であり、コピー操作が後の時点に延期されるため、バックアップの実行速度が速くなります。"
  }, {
    "label": "C",
    "text": "ハードリンクされたファイルは作成後に変更できないため、バックアップは無料であることが保証されます。"
  }, {
    "label": "D",
    "text": "ハードリンクは冗長コピーを保存するのではなく、ディスク上の同じデータを指すため、バックアップの消費スペースが少なくなります。"
  }, {
    "label": "E",
    "text": "ハードリンクは各ファイルのデータをコピーするのではなく、ファイルシステムのメタデータのみを変更するため、バックアップの実行速度が速くなります。"
  }],
  "answer": ["D", "E"],
  "selectCount": 2,
  "identifyHint": "バックアップソフトウェアは、2回のバックアップ実行間で変更されていないファイル間のハードリンク",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["バックアップソフトウェア"],
  "answerTexts": ["ハードリンクは冗長コピーを保存するのではなく、ディスク上の同じデータを指すため、バックアップの消費スペースが少なくなります。", "ハードリンクは各ファイルのデータをコピーするのではなく、ファイルシステムのメタデータのみを変更するため、バックアップの実行速度が速くなります。"],
  "answerHints": ["ハードリンクは冗長", "ハードリンクは各"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 15,
  "source": "模試",
  "type": "single",
  "question": "どの chown コマンドが、data.txt というファイルの所有権を dave に、グループを staff に変更しますか？",
  "choices": [{
    "label": "A",
    "text": "chown dave/staff data.txt"
  }, {
    "label": "B",
    "text": "chown -u dave -g staff data.txt"
  }, {
    "label": "C",
    "text": "chown --user dave --group staff data.txt"
  }, {
    "label": "D",
    "text": "chown dave+staff data.txt"
  }, {
    "label": "E",
    "text": "chown dave:staff data.txt"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "どの chown コマンドが、data.txt というファイルの所有権を dave に、グループを staff に変更",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["どの chown"],
  "answerTexts": ["chown dave:staff data.txt"],
  "answerHints": ["chown dave:staff"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 16,
  "source": "模試",
  "type": "multi",
  "question": "通常ユーザーとして chmod 640 filea.txt を実行しても、filea.txt のパーミッションが更新されません。chmodでパーミッションを変更できない理由は何でしょうか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "filea.txtは別のユーザーが所有しており、通常のユーザーは別のユーザーのファイルの権限を変更できません。"
  }, {
    "label": "B",
    "text": "filea.txtは、権限が固定値になっており、変更できないシンボリックリンクです。"
  }, {
    "label": "C",
    "text": "filea.txtにはスティッキービットが設定されており、通常のユーザーはこの権限を削除できません。"
  }, {
    "label": "D",
    "text": "filea.txtは、権限がターゲットから継承され、直接設定できないハードリンクです。"
  }, {
    "label": "E",
    "text": "filea.txtにはSetUIDビットが設定されており、ルートユーザーのみがファイルを変更できるという制限が課せられます。"
  }],
  "answer": ["A", "B"],
  "selectCount": 2,
  "identifyHint": "通常ユーザーとして chmod 640 filea.txt",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["通常ユーザー"],
  "answerTexts": ["filea.txtは別のユーザーが所有しており、通常のユーザーは別のユーザーのファイルの権限を変更できません。", "filea.txtは、権限が固定値になっており、変更できないシンボリックリンクです。"],
  "answerHints": ["filea.txtは別の", "filea.txtは、権限が固定値になっ"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 17,
  "source": "模試",
  "type": "single",
  "question": "どのumask値が、新しいディレクトリが所有ユーザーによって読み取り、書き込み、一覧表示され、所有グループによって読み取りおよび一覧表示され、他のすべてのユーザーによってまったくアクセスできないことを保証しますか？",
  "choices": [{
    "label": "A",
    "text": "0750"
  }, {
    "label": "B",
    "text": "0027"
  }, {
    "label": "C",
    "text": "0036"
  }, {
    "label": "D",
    "text": "7640"
  }, {
    "label": "E",
    "text": "0029"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "どのumask値",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["どのumask"],
  "answerTexts": ["0027"],
  "answerHints": ["0027"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 22,
  "source": "模試",
  "type": "single",
  "question": "ハードリンクの使用を検討する際に、ハードリンクを使用しない正当な理由は何ですか？",
  "choices": [{
    "label": "A",
    "text": "ハードリンクは、ext4などの従来のファイルシステムではサポートされていないため、すべてのLinuxシステムで利用できるわけではありません。"
  }, {
    "label": "B",
    "text": "各ハードリンクには個別の所有権、権限、ACLがあり、ファイルの内容が意図せず公開される可能性があります。"
  }, {
    "label": "C",
    "text": "ハードリンクは1つのファイルシステムに固有のものであり、別のファイルシステム上のファイルを指すことはできません。"
  }, {
    "label": "D",
    "text": "ルート以外のユーザーがハードリンクを作成できるようにするには、suinをインストールして設定する必要があります。"
  }, {
    "label": "E",
    "text": "ハードリンクされたファイルが変更されると、ファイルのコピーが作成され、追加のスペースを消費します。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ハードリンクの使用を検討する際に、ハードリンクを使用しない正当な理由",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ハードリンクの"],
  "answerTexts": ["ハードリンクは1つのファイルシステムに固有のものであり、別のファイルシステム上のファイルを指すことはできません。"],
  "answerHints": ["ハードリンクは1"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 25,
  "source": "模試",
  "type": "single",
  "question": "findの出力をxargsコマンドにリダイレクトする場合、ファイル名にスペースが含まれている場合、どのfindオプションが役立ちますか？",
  "choices": [{
    "label": "A",
    "text": "-rep-space"
  }, {
    "label": "B",
    "text": "-printnul"
  }, {
    "label": "C",
    "text": "-nospace"
  }, {
    "label": "D",
    "text": "-ignore-space"
  }, {
    "label": "E",
    "text": "-print0"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "findの出力をxargsコマンドにリダイレクトする場合、ファイル名にスペースが含まれている",
  "decisionKey": "",
  "mnemonic": "find -print0＝ヌル区切り。「スペース対策はprint0（ゼロ＝ヌル）」。",
  "answerKeys": ["findの"],
  "answerTexts": ["-print0"],
  "answerHints": ["-print0"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 29,
  "source": "模試",
  "type": "single",
  "question": "コマンド ls -i からの次の出力を検討してください。a.txt\n525385 -rw-rw-r-- 2 1000 1000 0 Feb 12 19:44 a.txt\n525255 lrwxrwxrwx 1 1000 1000 5 Feb 12 19:44 b.txt -> a.txt\n(inode 525385)と同じ inode 番号を持つ c.txt という名前の新しいファイルはどのように作成されるでしょうか。",
  "choices": [{
    "label": "A",
    "text": "ln -h a.txt c.txt"
  }, {
    "label": "B",
    "text": "ln c.txt a.txt"
  }, {
    "label": "C",
    "text": "ln a.txt c.txt"
  }, {
    "label": "D",
    "text": "ln -f c.txt a.txt"
  }, {
    "label": "E",
    "text": "ln -i 525385 c.txt"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "コマンド ls -i からの次の出力を検討してください。a.txt\n525385 -rw-rw-r-- 2 1000 1000 0 Feb 12 19:44 a.txt\n525255 lrwxrwxrwx 1 1000 1000 5 Feb 12 19:44 b.txt -> a.txt\n(inode 525385)と同じ inode 番号を持つ c.txt",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["コマンド ls"],
  "answerTexts": ["ln a.txt c.txt"],
  "answerHints": ["ln a"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 30,
  "source": "模試",
  "type": "multi",
  "question": "次のディレクトリについて考えてみましょう:\ndrwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales\nディレクトリsales内に作成された新しいファイルがグループsalesによって所有されることを保証するコマンドはどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "chmod g+s sales"
  }, {
    "label": "B",
    "text": "setpol -R newgroup=sales sales"
  }, {
    "label": "C",
    "text": "chgrp -p sales sales"
  }, {
    "label": "D",
    "text": "chown --persistent .sales sales"
  }, {
    "label": "E",
    "text": "chmod 2775 sales"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "次のディレクトリについて考えてみましょう:\ndrwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales\nディレクトリsales内に作成された新しいファイルがグループsalesによって所有される",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のディレクトリ"],
  "answerTexts": ["chmod g+s sales", "chmod 2775 sales"],
  "answerHints": ["chmod", "chmod"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 39,
  "source": "模試",
  "type": "multi",
  "question": "次のコマンドのうち、/tmp/ディレクトリとそのサブディレクトリ内にある、ユーザーrootが所有するすべてのファイルとディレクトリを一覧表示するものはどれですか。（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "find /tmp -user root -print"
  }, {
    "label": "B",
    "text": "find -path /tmp -uid root"
  }, {
    "label": "C",
    "text": "find /tmp -uid root -print"
  }, {
    "label": "D",
    "text": "find /tmp -user root"
  }, {
    "label": "E",
    "text": "find -path /tmp -user root -print"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "次のコマンドのうち、/tmp/ディレクトリとそのサブディレクトリ内にある、ユーザーrootが所有するすべてのファイルとディレクトリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、/tmp"],
  "answerTexts": ["find /tmp -user root -print", "find /tmp -user root"],
  "answerHints": ["find /tmp -user", "find /tmp -user"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 40,
  "source": "模試",
  "type": "single",
  "question": "通常のユーザーが新しいプロセスを実行するときに nice コマンドを使用してプロセスに割り当てることができる最大の nice 値はどれくらいですか？",
  "choices": [{
    "label": "A",
    "text": "9"
  }, {
    "label": "B",
    "text": "15"
  }, {
    "label": "C",
    "text": "19"
  }, {
    "label": "D",
    "text": "49"
  }, {
    "label": "E",
    "text": "99"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "通常のユーザーが新しいプロセスを実行するときに nice コマンドを使用してプロセスに割り当てることができる最大の nice 値",
  "decisionKey": "",
  "mnemonic": "一般ユーザのnice最大＝19。「いっきゅう（19）まで譲れる」。",
  "answerKeys": ["通常のユーザー"],
  "answerTexts": ["19"],
  "answerHints": ["19"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 58,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、gzipで圧縮されたtarアーカイブの内容を表示するものはどれですか？",
  "choices": [{
    "label": "A",
    "text": "gzip archive.tgz | tar xvf -"
  }, {
    "label": "B",
    "text": "tar -fzt archive.tgz"
  }, {
    "label": "C",
    "text": "gzip -d archive.tgz | tar tvf -"
  }, {
    "label": "D",
    "text": "tar cf archive.tgz"
  }, {
    "label": "E",
    "text": "tar ztf archive.tgz"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、gzipで圧縮されたtarアーカイブの内容を表示",
  "decisionKey": "",
  "mnemonic": "中身を見るだけ＝tar ztf。「z（gzip）t（表示=list）f（ファイル）」。",
  "answerKeys": ["次のコマンドのうち、gzip"],
  "answerTexts": ["tar ztf archive.tgz"],
  "answerHints": ["tar ztf"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 62,
  "source": "模試",
  "type": "multi",
  "question": "システムが稼働している時間を確認するために使用できるコマンドはどれですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "uptime"
  }, {
    "label": "B",
    "text": "up"
  }, {
    "label": "C",
    "text": "time --up"
  }, {
    "label": "D",
    "text": "uname -u"
  }, {
    "label": "E",
    "text": "top"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "システムが稼働している時間を確認",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["システム"],
  "answerTexts": ["uptime", "top"],
  "answerHints": ["uptime", "top"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 66,
  "source": "模試",
  "type": "single",
  "question": "キーボードでCtrl + Cキーの組み合わせが押されたときに、プロセスに送信される信号は次のどれですか。",
  "choices": [{
    "label": "A",
    "text": "SIGTERM"
  }, {
    "label": "B",
    "text": "SIGCONT"
  }, {
    "label": "C",
    "text": "SIGSTOP"
  }, {
    "label": "D",
    "text": "SIGKILL"
  }, {
    "label": "E",
    "text": "SIGINT"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "キーボードでCtrl + Cキーの組み合わせが押された",
  "decisionKey": "",
  "mnemonic": "Ctrl+C＝SIGINT。「C＝Cancel＝INTerrupt」。",
  "answerKeys": ["キーボードでCtrl + C"],
  "answerTexts": ["SIGINT"],
  "answerHints": ["SIGINT"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 70,
  "source": "模試",
  "type": "fill",
  "question": "空白を埋めてください - 特定の間隔でコマンドを実行し、プログラムの出力の表示を更新するプログラムはどれですか？（パスやパラメータを指定せずにコマンドのみを指定します。）",
  "choices": [],
  "answer": ["watch"],
  "selectCount": 1,
  "identifyHint": "空白を埋めてください - 特定の間隔でコマンドを実行し、プログラムの出力の表示を更新する",
  "decisionKey": "",
  "mnemonic": "一定間隔で繰り返し実行＝watch。「間隔で見張る＝watch」。",
  "answerKeys": ["空白を埋めてください - 特定の間隔で"],
  "answerTexts": ["watch"],
  "answerHints": ["watch"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 75,
  "source": "模試",
  "type": "single",
  "question": "ネストされたディレクトリ構造では、特定の数のサブディレクトリを検索するようにコマンドを制限するには、どの find コマンドライン オプションを使用しますか？",
  "choices": [{
    "label": "A",
    "text": "-maxdepth"
  }, {
    "label": "B",
    "text": "-dirmax"
  }, {
    "label": "C",
    "text": "-maxlevels"
  }, {
    "label": "D",
    "text": "-s"
  }, {
    "label": "E",
    "text": "-n"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "ネストされたディレクトリ構造では、特定の数のサブディレクトリを検索するようにコマンドを制限",
  "decisionKey": "",
  "mnemonic": "findの深さ制限＝-maxdepth。「最大の深さ＝maxdepth」。",
  "answerKeys": ["ネスト"],
  "answerTexts": ["-maxdepth"],
  "answerHints": ["-maxdepth"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 83,
  "source": "模試",
  "type": "single",
  "question": "既存のファイルを指すハードリンクが作成されると、次のどのプロパティが変更されますか？",
  "choices": [{
    "label": "A",
    "text": "File size"
  }, {
    "label": "B",
    "text": "Link count"
  }, {
    "label": "C",
    "text": "Modify timestamp"
  }, {
    "label": "D",
    "text": "Inode number"
  }, {
    "label": "E",
    "text": "Permissions"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "既存のファイルを指すハードリンクが作成されると、次のどのプロパティが変更",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["既存の"],
  "answerTexts": ["Link count"],
  "answerHints": ["Link"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 101,
  "source": "模試",
  "type": "fill",
  "question": "空白を埋めてください - 現在のシェルで実行されているすべてのバックグラウンド タスクのリストを表示するコマンドはどれですか？（パスやパラメータを指定せずにコマンドのみを指定します。）",
  "choices": [],
  "answer": ["jobs"],
  "selectCount": 1,
  "identifyHint": "空白を埋めてください - 現在のシェルで実行されているすべてのバックグラウンド タスクのリストを表示",
  "decisionKey": "",
  "mnemonic": "バックグラウンドの一覧＝jobs。「仕事(jobs)の一覧」。",
  "answerKeys": ["空白を埋めてください - 現在の"],
  "answerTexts": ["jobs"],
  "answerHints": ["jobs"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 102,
  "source": "模試",
  "type": "single",
  "question": "gzip 圧縮された tar アーカイブ texts.tgz にファイル a.txt と b.txt が含まれている場合、gunzip texts.tgz を実行した後、現在のディレクトリにはどのファイルが存在するでしょうか？",
  "choices": [{
    "label": "A",
    "text": "a.txt、b.txt、texts.tgz のみ"
  }, {
    "label": "B",
    "text": "texts.tar と texts.tgz のみ"
  }, {
    "label": "C",
    "text": "a.txt.gz と b.txt.gz のみ"
  }, {
    "label": "D",
    "text": "a.txt と b.txt のみ"
  }, {
    "label": "E",
    "text": "texts.tar のみ"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "gzip 圧縮された tar アーカイブ texts.tgz にファイル a.txt と b.txt が含まれている場合、gunzip texts.tgz を実行した後",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["gzip"],
  "answerTexts": ["texts.tar のみ"],
  "answerHints": ["texts.tar のみ"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 110,
  "source": "模試",
  "type": "fill",
  "question": "空白を埋めてください - 特定の nice レベルで別のコマンドを開始するために使用されるコマンドはどれですか？（パスやパラメータを指定せずにコマンドのみを指定します。）",
  "choices": [],
  "answer": ["nice"],
  "selectCount": 1,
  "identifyHint": "空白を埋めてください - 特定の nice レベルで別のコマンドを開始",
  "decisionKey": "",
  "mnemonic": "指定レベルで開始＝nice。「優先度を始めから決める＝nice」。",
  "answerKeys": ["空白を埋めてください - 特定の nice"],
  "answerTexts": ["nice"],
  "answerHints": ["nice"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 114,
  "source": "模試",
  "type": "single",
  "question": "キーボードで Ctrl + Z キーの組み合わせが押されたときに、プロセスに送信される信号は次のどれですか。",
  "choices": [{
    "label": "A",
    "text": "SIGTERM"
  }, {
    "label": "B",
    "text": "SIGCONT"
  }, {
    "label": "C",
    "text": "SIGSTOP"
  }, {
    "label": "D",
    "text": "SIGKILL"
  }, {
    "label": "E",
    "text": "SIGINT"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "キーボードで Ctrl + Z キーの組み合わせが押された",
  "decisionKey": "",
  "mnemonic": "Ctrl+Z＝SIGSTOP。「Z＝Zzz（眠る＝一時停止）＝STOP」。",
  "answerKeys": ["キーボードで Ctrl + Z"],
  "answerTexts": ["SIGSTOP"],
  "answerHints": ["SIGSTOP"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 117,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、実行可能ファイル /bin/foo に SetUID 権限を設定するのはどれですか？",
  "choices": [{
    "label": "A",
    "text": "chmod 4755 /bin/foo"
  }, {
    "label": "B",
    "text": "chmod 1755 /bin/foo"
  }, {
    "label": "C",
    "text": "chmod u-s /bin/foo"
  }, {
    "label": "D",
    "text": "chmod 755+s /bin/foo"
  }, {
    "label": "E",
    "text": "chmod 2755 /bin/foo"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、実行可能ファイル /bin/foo に SetUID 権限を設定",
  "decisionKey": "",
  "mnemonic": "SetUID＝先頭4。「chmod 4755、4がSUID」。",
  "answerKeys": ["次のコマンドのうち、実行可能"],
  "answerTexts": ["chmod 4755 /bin/foo"],
  "answerHints": ["chmod 4755"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 119,
  "source": "模試",
  "type": "fill",
  "question": "空欄を埋めてください - すでに実行中のプロセスの優先度を変更するにはどのコマンドを使用しますか？（パスやパラメータを指定せずにコマンドのみを指定します。）",
  "choices": [],
  "answer": ["renice"],
  "selectCount": 1,
  "identifyHint": "空欄を埋めてください - すでに実行中のプロセスの優先度を変更する",
  "decisionKey": "",
  "mnemonic": "実行中の優先度変更＝renice。「re（やり直し）+nice」。",
  "answerKeys": ["空欄を埋めてください - すでに"],
  "answerTexts": ["renice"],
  "answerHints": ["renice"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 120,
  "source": "模試",
  "type": "multi",
  "question": "次のコマンドのうち、root が所有するすべてのプロセスの ID を表示するものはどれですか（2つ選択してください）。",
  "choices": [{
    "label": "A",
    "text": "pgrep -c root"
  }, {
    "label": "B",
    "text": "pgrep -u root"
  }, {
    "label": "C",
    "text": "pgrep -f root"
  }, {
    "label": "D",
    "text": "pgrep -U 0"
  }, {
    "label": "E",
    "text": "pgrep -c 0"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "次のコマンドのうち、root が所有するすべてのプロセスの ID を表示する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、root"],
  "answerTexts": ["pgrep -u root", "pgrep -U 0"],
  "answerHints": ["pgrep -u", "pgrep -U"],
  "chap": "第4章 ファイルとプロセスの管理"
}, {
  "id": 11,
  "source": "模試",
  "type": "single",
  "question": "次のコマンドのうち、起動時に/dev/sda1上のext3ファイルシステムが完全なファイルシステムチェックを実行するまでの日数を変更するものはどれですか？",
  "choices": [{
    "label": "A",
    "text": "tune2fs -d 200 /dev/sda1"
  }, {
    "label": "B",
    "text": "tune2fs -i 200 /dev/sda1"
  }, {
    "label": "C",
    "text": "tune2fs -c 200 /dev/sda1"
  }, {
    "label": "D",
    "text": "tune2fs -n 200 /dev/sda1"
  }, {
    "label": "E",
    "text": "tune2fs --days 200 /dev/sda1"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次のコマンドのうち、起動時に/dev/sda1上のext3ファイルシステムが完全なファイルシステムチェックを実行するまでの日数を変更する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次のコマンドのうち、起動時に"],
  "answerTexts": ["tune2fs -i 200 /dev/sda1"],
  "answerHints": ["tune2fs -i"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 14,
  "source": "模試",
  "type": "fill",
  "question": "/procファイルシステムのどのファイルに、現在マウントされているすべてのデバイスのリストが含まれていますか？（パスを含むファイルの完全な名前を指定してください。）",
  "choices": [],
  "answer": ["/proc/mounts"],
  "selectCount": 1,
  "identifyHint": "/procファイルシステムのどのファイルに、現在マウントされているすべてのデバイスのリスト",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/procファイルシステム"],
  "answerTexts": ["/proc/mounts"],
  "answerHints": ["/proc/mounts"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 21,
  "source": "模試",
  "type": "single",
  "question": "FHSに準拠して、マニュアルページはどのディレクトリにありますか？",
  "choices": [{
    "label": "A",
    "text": "/opt/man/"
  }, {
    "label": "B",
    "text": "/usr/doc/"
  }, {
    "label": "C",
    "text": "/usr/share/man/"
  }, {
    "label": "D",
    "text": "/var/pkg/man"
  }, {
    "label": "E",
    "text": "/var/man/"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "FHSに準拠して、マニュアルページはどのディレクトリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["FHS"],
  "answerTexts": ["/usr/share/man/"],
  "answerHints": ["/usr/share"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 23,
  "source": "模試",
  "type": "fill",
  "question": "空白を埋めてください - マウントされたすべてのファイルシステムの現在のディスク領域使用量を表示するコマンドはどれですか？（パスやパラメータを指定せずにコマンドのみを指定します。）",
  "choices": [],
  "answer": ["df"],
  "selectCount": 1,
  "identifyHint": "空白を埋めてください - マウントされたすべてのファイルシステムの現在のディスク領域使用量を表示する",
  "decisionKey": "",
  "mnemonic": "ディスク使用量＝df。「disk free＝df」。",
  "answerKeys": ["空白を埋めてください - マウント"],
  "answerTexts": ["df"],
  "answerHints": ["df"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 27,
  "source": "模試",
  "type": "single",
  "question": "ブロックデバイス名のみを指定し、追加のパラメータを指定せずに mkfs を実行すると、どのタイプのファイルシステムが作成されますか。",
  "choices": [{
    "label": "A",
    "text": "XFS"
  }, {
    "label": "B",
    "text": "VFAT"
  }, {
    "label": "C",
    "text": "ext2"
  }, {
    "label": "D",
    "text": "ext3"
  }, {
    "label": "E",
    "text": "ext4"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ブロックデバイス名のみを指定し、追加のパラメータを指定せずに mkfs を実行する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ブロックデバイス"],
  "answerTexts": ["ext2"],
  "answerHints": ["ext2"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 31,
  "source": "模試",
  "type": "multi",
  "question": "マウント用に /etc/fstab に明示的なデバイスを指定する代わりに、目的のパーティションを識別するために使用できる他のオプションは何ですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "LABEL"
  }, {
    "label": "B",
    "text": "ID"
  }, {
    "label": "C",
    "text": "FIND"
  }, {
    "label": "D",
    "text": "NAME"
  }, {
    "label": "E",
    "text": "UUID"
  }],
  "answer": ["A", "E"],
  "selectCount": 2,
  "identifyHint": "マウント用に /etc/fstab に明示的なデバイスを指定する代わりに、目的のパーティションを識別する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["マウント"],
  "answerTexts": ["LABEL", "UUID"],
  "answerHints": ["LABEL", "UUID"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 34,
  "source": "模試",
  "type": "fill",
  "question": "空欄を埋めてください - locateコマンドによって使用されるデータベースを更新するプログラムはどれですか？（パスやパラメータを指定せずにコマンドのみを指定します）。",
  "choices": [],
  "answer": ["updatedb"],
  "selectCount": 1,
  "identifyHint": "空欄を埋めてください - locateコマンドによって使用されるデータベースを更新する",
  "decisionKey": "",
  "mnemonic": "locateのDB更新＝updatedb。「DBをupdate＝updatedb」。",
  "answerKeys": ["空欄を埋めてください - locate"],
  "answerTexts": ["updatedb"],
  "answerHints": ["updatedb"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 35,
  "source": "模試",
  "type": "single",
  "question": "/etc/fstabにリストされておらず、システムにも認識されていないファイルシステムを手動でマウントする場合、次のどれが当てはまりますか？",
  "choices": [{
    "label": "A",
    "text": "systemdは、systemctl マウントコマンドを使用せずに行われた手動マウントを無視します。"
  }, {
    "label": "B",
    "text": "コマンド systemctl mountsync は、既存のマウントに基づいてマウントユニットを作成するために使用できます。"
  }, {
    "label": "C",
    "text": "systemdはマウントユニットを自動的に生成し、マウントポイントを変更せずに監視します。"
  }, {
    "label": "D",
    "text": "systemd マウントユニットが作成されていない場合、systemdは短時間でファイルシステムをアンマウントします。"
  }, {
    "label": "E",
    "text": "システムがマウントポイント上のファイル記述子を開くため、マウントを解除するには systemctl unmount を使用する必要があります。"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "/etc/fstabにリストされておらず、システムにも認識されていないファイルシステムを手動でマウントする",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/etc/fstabに"],
  "answerTexts": ["systemdはマウントユニットを自動的に生成し、マウントポイントを変更せずに監視します。"],
  "answerHints": ["systemdはマウントユニット"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 44,
  "source": "模試",
  "type": "single",
  "question": "ハードディスクドライブをパーティション分割するときに、Linuxスワップ領域に使用されるパーティションタイプは次のどれですか。",
  "choices": [{
    "label": "A",
    "text": "7"
  }, {
    "label": "B",
    "text": "82"
  }, {
    "label": "C",
    "text": "83"
  }, {
    "label": "D",
    "text": "8e"
  }, {
    "label": "E",
    "text": "fd"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "ハードディスクドライブをパーティション分割するときに、Linuxスワップ領域に使用されるパーティションタイプ",
  "decisionKey": "",
  "mnemonic": "Linuxスワップのタイプ＝82。「スワップは82（やに）」。",
  "answerKeys": ["ハードディスクドライブ"],
  "answerTexts": ["82"],
  "answerHints": ["82"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 84,
  "source": "模試",
  "type": "single",
  "question": "停電後、/dev/sda3 の XFS ファイルシステムに不整合が生じています。既存のファイルシステムエラーを修正するにはどうすればよいですか？",
  "choices": [{
    "label": "A",
    "text": "mount -f を使用してファイルシステムを強制的にマウントする"
  }, {
    "label": "B",
    "text": "ファイルシステム上で xfsck を実行する"
  }, {
    "label": "C",
    "text": "xfs_repair オプションを使用してファイルシステムをマウントする"
  }, {
    "label": "D",
    "text": "ファイルシステム上で xfsadmin repair を実行する"
  }, {
    "label": "E",
    "text": "ファイルシステム上で xfs_repair を実行する"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "停電後、/dev/sda3 の XFS ファイルシステムに不整合",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["停電後"],
  "answerTexts": ["ファイルシステム上で xfs_repair を実行する"],
  "answerHints": ["ファイルシステム上で xfs_repair"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 85,
  "source": "模試",
  "type": "multi",
  "question": "次の Linux ファイルシステムのうち、必要に応じて生成するのではなく、新しいファイルシステムを作成するときに固定数の inode を事前に割り当てるものはどれですか。（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "JFS"
  }, {
    "label": "B",
    "text": "ext3"
  }, {
    "label": "C",
    "text": "XFS"
  }, {
    "label": "D",
    "text": "ext2"
  }, {
    "label": "E",
    "text": "procfs"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "次の Linux ファイルシステムのうち、必要に応じて生成するのではなく、新しいファイルシステムを作成するときに固定数の inode を事前に割り当てる",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の Linux"],
  "answerTexts": ["ext3", "ext2"],
  "answerHints": ["ext3", "ext2"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 87,
  "source": "模試",
  "type": "multi",
  "question": "現在マウントされているすべてのファイルシステムを表示するには、次のコマンドのどれを使用できますか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "cat /proc/self/mounts"
  }, {
    "label": "B",
    "text": "free"
  }, {
    "label": "C",
    "text": "lsmounts"
  }, {
    "label": "D",
    "text": "mount"
  }, {
    "label": "E",
    "text": "cat /proc/filesystems"
  }],
  "answer": ["A", "D"],
  "selectCount": 2,
  "identifyHint": "現在マウントされているすべてのファイルシステムを表示",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["現在マウント"],
  "answerTexts": ["cat /proc/self/mounts", "mount"],
  "answerHints": ["cat /proc/self", "mount"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 88,
  "source": "模試",
  "type": "single",
  "question": "コマンド mount --bind は何をしますか？",
  "choices": [{
    "label": "A",
    "text": "あるディレクトリの内容を別のディレクトリで利用できるようにする"
  }, {
    "label": "B",
    "text": "利用可能なすべてのファイルシステムを現在のディレクトリにマウントします"
  }, {
    "label": "C",
    "text": "ユーザーがマウント可能なすべてのファイルシステムをユーザーのホームディレクトリにマウントします。"
  }, {
    "label": "D",
    "text": "/etc/fstabにリストされ、オプション userbind が設定されているすべてのファイルシステムをマウントします。"
  }, {
    "label": "E",
    "text": "通常のファイルをディレクトリに永続的にマウントする"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "コマンド mount --bind",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["コマンド mount"],
  "answerTexts": ["あるディレクトリの内容を別のディレクトリで利用できるようにする"],
  "answerHints": ["ある"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 91,
  "source": "模試",
  "type": "multi",
  "question": "パーティションの最大数とサイズに関して、GPT パーティション テーブルと MBR パーティション テーブルの主な違いは何ですか？（2つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "MBR は最大 4 TB のパーティション サイズを処理できますが、GPT は最大 128 ZB のパーティション サイズをサポートします。"
  }, {
    "label": "B",
    "text": "デフォルトでは、GPT は最大 128 個のパーティションを管理できますが、MBR は 4 つのプライマリ パーティションのみをサポートします。"
  }, {
    "label": "C",
    "text": "デフォルトでは、GPT は最大 64 個のパーティションを管理できますが、MBR は 16 個のプライマリ パーティションのみをサポートします。"
  }, {
    "label": "D",
    "text": "MBR は最大 2.2 TB のパーティション サイズを処理できますが、GPT は最大 9.4 ZB のサイズをサポートします。"
  }, {
    "label": "E",
    "text": "GPT と MBR はどちらも最大 4 つのプライマリ パーティションをサポートし、各パーティションの最大容量は 4096 TB です。"
  }],
  "answer": ["B", "D"],
  "selectCount": 2,
  "identifyHint": "パーティションの最大数とサイズに関して、GPT パーティション テーブルと MBR パーティション テーブルの主な違い",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パーティション"],
  "answerTexts": ["デフォルトでは、GPT は最大 128 個のパーティションを管理できますが、MBR は 4 つのプライマリ パーティションのみをサポートします。", "MBR は最大 2.2 TB のパーティション サイズを処理できますが、GPT は最大 9.4 ZB のサイズをサポートします。"],
  "answerHints": ["デフォルトでは、GP", "MBR は最大 2."],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 97,
  "source": "模試",
  "type": "single",
  "question": "新しい ext4 ファイルシステム上の root ユーザー用に予約された領域のデフォルトのパーセンテージはどれくらいですか？",
  "choices": [{
    "label": "A",
    "text": "10%"
  }, {
    "label": "B",
    "text": "3%"
  }, {
    "label": "C",
    "text": "15%"
  }, {
    "label": "D",
    "text": "0%"
  }, {
    "label": "E",
    "text": "5%"
  }],
  "answer": ["E"],
  "selectCount": 1,
  "identifyHint": "新しい ext4 ファイルシステム上の root ユーザー用に予約された領域のデフォルトのパーセンテージ",
  "decisionKey": "",
  "mnemonic": "ext4のroot予約＝5%。「だいたい5%取っておく」。",
  "answerKeys": ["新しい"],
  "answerTexts": ["5%"],
  "answerHints": ["5"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 98,
  "source": "模試",
  "type": "fill",
  "question": "空欄を埋めてください - ファイルシステム階層標準 (FHS) に従って、システム管理者がコンパイルしたバイナリをシステム上のすべてのユーザーが利用できるようにするためには、どこに配置する必要がありますか？（ディレクトリへのフルパスを指定します。）",
  "choices": [],
  "answer": ["/usr/local/bin/"],
  "selectCount": 1,
  "identifyHint": "空欄を埋めてください - ファイルシステム階層標準 (FHS) に従って、システム管理者がコンパイルしたバイナリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["空欄を埋めてください - ファイルシステム"],
  "answerTexts": ["/usr/local/bin/"],
  "answerHints": ["/usr/local/bin/"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100,
  "source": "模試",
  "type": "multi",
  "question": "論理ボリューム マネージャ (LVM) は何に使用できますか？（3つ選択してください。）",
  "choices": [{
    "label": "A",
    "text": "スナップショットを作成するため。"
  }, {
    "label": "B",
    "text": "論理ボリュームのサイズを動的に変更します。"
  }, {
    "label": "C",
    "text": "論理ボリュームを動的に作成または削除します。"
  }, {
    "label": "D",
    "text": "RAID 9 アレイを作成します。"
  }, {
    "label": "E",
    "text": "論理ボリュームを暗号化します。"
  }],
  "answer": ["A", "B", "C"],
  "selectCount": 3,
  "identifyHint": "論理ボリューム マネージャ (LVM)",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["論理"],
  "answerTexts": ["スナップショットを作成するため。", "論理ボリュームのサイズを動的に変更します。", "論理ボリュームを動的に作成または削除します。"],
  "answerHints": ["スナップショット", "論理ボリュームの", "論理ボリュームを動的に"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 113,
  "source": "模試",
  "type": "single",
  "question": "/etc/fstab の構文的に正しい行にはフィールドがいくつありますか？",
  "choices": [{
    "label": "A",
    "text": "3"
  }, {
    "label": "B",
    "text": "4"
  }, {
    "label": "C",
    "text": "5"
  }, {
    "label": "D",
    "text": "6"
  }, {
    "label": "E",
    "text": "7"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "/etc/fstab の構文的に正しい行にはフィールド",
  "decisionKey": "",
  "mnemonic": "/etc/fstabの列＝6。「ろく(6)つの項目」。",
  "answerKeys": ["/etc/fstab の"],
  "answerTexts": ["6"],
  "answerHints": ["6"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100000,
  "source": "想定",
  "type": "single",
  "question": "UEFIがBIOSと比較して持つ利点として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ブートプロセスが常に遅くなる"
  }, {
    "label": "B",
    "text": "2TBを超えるディスクからのブートをサポートする"
  }, {
    "label": "C",
    "text": "セキュアブートに対応していない"
  }, {
    "label": "D",
    "text": "MBRパーティションテーブルのみ使用する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "UEFIがBIOSと比較して持つ利点として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["UEFIがBIOSと比較して持つ利点として誤ってい"],
  "answerTexts": ["ブートプロセスが常に遅くなる"],
  "answerHints": ["ブートプロセスが常に"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 125,
  "source": "想定",
  "type": "single",
  "question": "D-Busの役割として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "プロセス間通信 (IPC) のためのメッセージバスシステム"
  }, {
    "label": "B",
    "text": "データベースの管理ツール"
  }, {
    "label": "C",
    "text": "ディスクのバックアップを取得するツール"
  }, {
    "label": "D",
    "text": "DNSの名前解決を行うサービス"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "D-Busの役割として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["D-Busの役割として正しいも"],
  "answerTexts": ["プロセス間通信 (IPC) のためのメッセージバスシステム"],
  "answerHints": ["プロセス"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 156,
  "source": "想定",
  "type": "single",
  "question": "D-Busの役割として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ディスクのバックアップを取得するツール"
  }, {
    "label": "B",
    "text": "データベースの管理ツール"
  }, {
    "label": "C",
    "text": "プロセス間通信 (IPC) のためのメッセージバスシステム"
  }, {
    "label": "D",
    "text": "DNSの名前解決を行うサービス"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "D-Busの役割として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["D-Busの役割として誤ってい"],
  "answerTexts": ["データベースの管理ツール"],
  "answerHints": ["データベース"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 171,
  "source": "想定",
  "type": "single",
  "question": "UEFIがBIOSと比較して持つ利点として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "MBRパーティションテーブルのみ使用する"
  }, {
    "label": "B",
    "text": "2TBを超えるディスクからのブートをサポートする"
  }, {
    "label": "C",
    "text": "ブートプロセスが常に遅くなる"
  }, {
    "label": "D",
    "text": "セキュアブートに対応していない"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "UEFIがBIOSと比較して持つ利点",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["UEFIがBIOSと比較して持つ利点として適切な"],
  "answerTexts": ["2TBを超えるディスクからのブートをサポートする"],
  "answerHints": ["2TB"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 174,
  "source": "想定",
  "type": "single",
  "question": "UEFIがBIOSと比較して持つ利点として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ブートプロセスが常に遅くなる"
  }, {
    "label": "B",
    "text": "セキュアブートに対応していない"
  }, {
    "label": "C",
    "text": "MBRパーティションテーブルのみ使用する"
  }, {
    "label": "D",
    "text": "2TBを超えるディスクからのブートをサポートする"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "UEFIがBIOSと比較して持つ利点",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["UEFIがBIOSと比較して持つ利点として正しいも"],
  "answerTexts": ["2TBを超えるディスクからのブートをサポートする"],
  "answerHints": ["2TB"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 200,
  "source": "想定",
  "type": "single",
  "question": "systemdにおいて、マルチユーザーモード (CUIログイン可能) に対応するターゲットはどれか。",
  "choices": [{
    "label": "A",
    "text": "multi-user.target"
  }, {
    "label": "B",
    "text": "rescue.target"
  }, {
    "label": "C",
    "text": "graphical.target"
  }, {
    "label": "D",
    "text": "emergency.target"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "systemdにおいて、マルチユーザーモード (CUIログイン可能) に対応するターゲット",
  "decisionKey": "",
  "mnemonic": "マルチユーザCUI＝multi-user.target。「複数ユーザ＝multi-user」。",
  "answerKeys": ["systemd"],
  "answerTexts": ["multi-user.target"],
  "answerHints": ["multi"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 215,
  "source": "想定",
  "type": "single",
  "question": "dmidecodeコマンドの用途として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "DMI/SMBIOSテーブルからハードウェア情報を表示する"
  }, {
    "label": "B",
    "text": "ネットワークインターフェースを設定する"
  }, {
    "label": "C",
    "text": "ディスクのパーティションを作成する"
  }, {
    "label": "D",
    "text": "カーネルモジュールを一覧表示する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "dmidecodeコマンドの用途",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dmidecodeコマンドの用途として適切な"],
  "answerTexts": ["DMI/SMBIOSテーブルからハードウェア情報を表示する"],
  "answerHints": ["DMI"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 223,
  "source": "想定",
  "type": "single",
  "question": "/proc/cpuinfoから確認できる情報はどれか。",
  "choices": [{
    "label": "A",
    "text": "マウントされたファイルシステムの一覧"
  }, {
    "label": "B",
    "text": "CPUのモデル名、コア数、クロック周波数"
  }, {
    "label": "C",
    "text": "現在のネットワーク接続状況"
  }, {
    "label": "D",
    "text": "インストール済みパッケージの一覧"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "/proc/cpuinfoから確認できる情報",
  "decisionKey": "",
  "mnemonic": "/proc/cpuinfo＝CPU情報。「cpuinfoだからCPUのモデル・コア・周波数」。",
  "answerKeys": ["/proc/"],
  "answerTexts": ["CPUのモデル名、コア数、クロック周波数"],
  "answerHints": ["CPU"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 242,
  "source": "想定",
  "type": "single",
  "question": "dmidecodeコマンドの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ネットワークインターフェースを設定する"
  }, {
    "label": "B",
    "text": "カーネルモジュールを一覧表示する"
  }, {
    "label": "C",
    "text": "DMI/SMBIOSテーブルからハードウェア情報を表示する"
  }, {
    "label": "D",
    "text": "ディスクのパーティションを作成する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "dmidecodeコマンドの用途",
  "decisionKey": "",
  "mnemonic": "dmidecode＝ハード情報(DMI/SMBIOS)。「dmi→ハードウェア情報を読む」。",
  "answerKeys": ["dmidecodeコマンドの用途として正しいも"],
  "answerTexts": ["DMI/SMBIOSテーブルからハードウェア情報を表示する"],
  "answerHints": ["DMI"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 243,
  "source": "想定",
  "type": "single",
  "question": "次の中から、UEFIがBIOSと比較して持つ利点として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "セキュアブートに対応していない"
  }, {
    "label": "B",
    "text": "ブートプロセスが常に遅くなる"
  }, {
    "label": "C",
    "text": "MBRパーティションテーブルのみ使用する"
  }, {
    "label": "D",
    "text": "2TBを超えるディスクからのブートをサポートする"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、UEFIがBIOSと比較して持つ利点",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、UEFI"],
  "answerTexts": ["2TBを超えるディスクからのブートをサポートする"],
  "answerHints": ["2TB"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 249,
  "source": "想定",
  "type": "single",
  "question": "次の中から、systemdにおいて、マルチユーザーモード (CUIログイン可能) に対応する ターゲットはどれか。",
  "choices": [{
    "label": "A",
    "text": "multi-user.target"
  }, {
    "label": "B",
    "text": "graphical.target"
  }, {
    "label": "C",
    "text": "emergency.target"
  }, {
    "label": "D",
    "text": "rescue.target"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、systemdにおいて、マルチユーザーモード (CUIログイン可能) に対応する ターゲット",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、systemd"],
  "answerTexts": ["multi-user.target"],
  "answerHints": ["multi"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 315,
  "source": "想定",
  "type": "single",
  "question": "/proc/cpuinfoから確認できる情報はどれか。",
  "choices": [{
    "label": "A",
    "text": "インストール済みパッケージの一覧"
  }, {
    "label": "B",
    "text": "マウントされたファイルシステムの一覧"
  }, {
    "label": "C",
    "text": "現在のネットワーク接続状況"
  }, {
    "label": "D",
    "text": "CPUのモデル名、コア数、クロック周波数"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "/proc/cpuinfoから確認できる情報",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/proc/"],
  "answerTexts": ["CPUのモデル名、コア数、クロック周波数"],
  "answerHints": ["CPU"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 397,
  "source": "想定",
  "type": "single",
  "question": "BIOS/UEFIの役割として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ネットワークインターフェースの設定を行う"
  }, {
    "label": "B",
    "text": "ファイルシステムのフォーマットを行う"
  }, {
    "label": "C",
    "text": "ハードウェアの初期化とブートローダーの読み込みを行う"
  }, {
    "label": "D",
    "text": "カーネルモジュールのコンパイルを行う"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "BIOS/UEFIの役割として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["BIOS/UEFIの役割として誤ってい"],
  "answerTexts": ["ファイルシステムのフォーマットを行う"],
  "answerHints": ["ファイルシステム"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 100001,
  "source": "想定",
  "type": "single",
  "question": "現在のシステムのデフォルトターゲットを確認するsystemdコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "systemctl show-target"
  }, {
    "label": "B",
    "text": "systemctl status"
  }, {
    "label": "C",
    "text": "systemctl status"
  }, {
    "label": "D",
    "text": "systemctl get-default"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "現在のシステムのデフォルトターゲットを確認するsystemdコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["現在のシステム"],
  "answerTexts": ["systemctl get-default"],
  "answerHints": ["systemctl get"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 100002,
  "source": "想定",
  "type": "single",
  "question": "BIOS/UEFIの役割として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ネットワークインターフェースの設定を行う"
  }, {
    "label": "B",
    "text": "ファイルシステムのフォーマットを行う"
  }, {
    "label": "C",
    "text": "ハードウェアの初期化とブートローダーの読み込みを行う"
  }, {
    "label": "D",
    "text": "カーネルモジュールのコンパイルを行う"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "BIOS/UEFIの役割として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["BIOS/UEFIの役割として正しいも"],
  "answerTexts": ["ハードウェアの初期化とブートローダーの読み込みを行う"],
  "answerHints": ["ハードウェア"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 155,
  "source": "想定",
  "type": "single",
  "question": "SysVinitにおけるランレベル0の意味はどれか。",
  "choices": [{
    "label": "A",
    "text": "シングルユーザーモード"
  }, {
    "label": "B",
    "text": "システムの停止 (シャットダウン)"
  }, {
    "label": "C",
    "text": "マルチユーザーモード"
  }, {
    "label": "D",
    "text": "再起動"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "SysVinitにおけるランレベル0の意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["SysVinit"],
  "answerTexts": ["システムの停止 (シャットダウン)"],
  "answerHints": ["システム"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 217,
  "source": "想定",
  "type": "single",
  "question": "dmidecodeコマンドの用途として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ネットワークインターフェースを設定する"
  }, {
    "label": "B",
    "text": "カーネルモジュールを一覧表示する"
  }, {
    "label": "C",
    "text": "ディスクのパーティションを作成する"
  }, {
    "label": "D",
    "text": "DMI/SMBIOSテーブルからハードウェア情報を表示する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "dmidecodeコマンドの用途として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dmidecodeコマンドの用途として誤ってい"],
  "answerTexts": ["ディスクのパーティションを作成する"],
  "answerHints": ["ディスクのパーティシ"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 220,
  "source": "想定",
  "type": "single",
  "question": "SysVinitにおけるランレベル0の意味はどれか。",
  "choices": [{
    "label": "A",
    "text": "システムの停止 (シャットダウン)"
  }, {
    "label": "B",
    "text": "シングルユーザーモード"
  }, {
    "label": "C",
    "text": "マルチユーザーモード"
  }, {
    "label": "D",
    "text": "再起動"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "SysVinitにおけるランレベル0の意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["SysVinit"],
  "answerTexts": ["システムの停止 (シャットダウン)"],
  "answerHints": ["システム"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 221,
  "source": "想定",
  "type": "single",
  "question": "次の中から、SysVinitにおけるランレベル0の意味はどれか。",
  "choices": [{
    "label": "A",
    "text": "システムの停止 (シャットダウン)"
  }, {
    "label": "B",
    "text": "シングルユーザーモード"
  }, {
    "label": "C",
    "text": "マルチユーザーモード"
  }, {
    "label": "D",
    "text": "再起動"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、SysVinitにおけるランレベル0の意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、SysVinit"],
  "answerTexts": ["システムの停止 (シャットダウン)"],
  "answerHints": ["システム"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 251,
  "source": "想定",
  "type": "single",
  "question": "次の中から、BIOS/UEFIの役割として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ハードウェアの初期化とブートローダーの読み込みを行う"
  }, {
    "label": "B",
    "text": "ファイルシステムのフォーマットを行う"
  }, {
    "label": "C",
    "text": "カーネルモジュールのコンパイルを行う"
  }, {
    "label": "D",
    "text": "ネットワークインターフェースの設定を行う"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、BIOS/UEFIの役割として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、BIOS"],
  "answerTexts": ["ハードウェアの初期化とブートローダーの読み込みを行う"],
  "answerHints": ["ハードウェア"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 303,
  "source": "想定",
  "type": "single",
  "question": "systemdにおいて、マルチユーザーモード (CUIログイン可能) に対応するターゲットはどれか。",
  "choices": [{
    "label": "A",
    "text": "rescue.target"
  }, {
    "label": "B",
    "text": "multi-user.target"
  }, {
    "label": "C",
    "text": "emergency.target"
  }, {
    "label": "D",
    "text": "graphical.target"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "systemdにおいて、マルチユーザーモード (CUIログイン可能) に対応するターゲット",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["systemd"],
  "answerTexts": ["multi-user.target"],
  "answerHints": ["multi"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 338,
  "source": "想定",
  "type": "single",
  "question": "D-Busの役割として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "プロセス間通信 (IPC) のためのメッセージバスシステム"
  }, {
    "label": "B",
    "text": "ディスクのバックアップを取得するツール"
  }, {
    "label": "C",
    "text": "データベースの管理ツール"
  }, {
    "label": "D",
    "text": "DNSの名前解決を行うサービス"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "D-Busの役割として適切な説明",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["D-Busの役割として適切な"],
  "answerTexts": ["プロセス間通信 (IPC) のためのメッセージバスシステム"],
  "answerHints": ["プロセス"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 379,
  "source": "想定",
  "type": "single",
  "question": "次の中から、BIOS/UEFIの役割として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルシステムのフォーマットを行う"
  }, {
    "label": "B",
    "text": "カーネルモジュールのコンパイルを行う"
  }, {
    "label": "C",
    "text": "ハードウェアの初期化とブートローダーの読み込みを行う"
  }, {
    "label": "D",
    "text": "ネットワークインターフェースの設定を行う"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、BIOS/UEFIの役割として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、BIOS"],
  "answerTexts": ["ハードウェアの初期化とブートローダーの読み込みを行う"],
  "answerHints": ["ハードウェア"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 500,
  "source": "想定",
  "type": "single",
  "question": "/proc/cpuinfoから確認できる情報はどれか。",
  "choices": [{
    "label": "A",
    "text": "インストール済みパッケージの一覧"
  }, {
    "label": "B",
    "text": "現在のネットワーク接続状況"
  }, {
    "label": "C",
    "text": "CPUのモデル名、コア数、クロック周波数"
  }, {
    "label": "D",
    "text": "マウントされたファイルシステムの一覧"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "/proc/cpuinfoから確認できる情報",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/proc/"],
  "answerTexts": ["CPUのモデル名、コア数、クロック周波数"],
  "answerHints": ["CPU"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 100003,
  "source": "想定",
  "type": "single",
  "question": "BIOS/UEFIの役割として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "ファイルシステムのフォーマットを行う"
  }, {
    "label": "B",
    "text": "カーネルモジュールのコンパイルを行う"
  }, {
    "label": "C",
    "text": "ネットワークインターフェースの設定を行う"
  }, {
    "label": "D",
    "text": "ハードウェアの初期化しブートローダーの読み込みを行う"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "BIOS/UEFIの役割",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["BIOS/UEFIの役割として適切な"],
  "answerTexts": ["ハードウェアの初期化しブートローダーの読み込みを行う"],
  "answerHints": ["ハードウェア"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 245,
  "source": "想定",
  "type": "single",
  "question": "次の中から、dmidecodeコマンドの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "SMBIOSテーブルからハードウェア情報を表示する"
  }, {
    "label": "B",
    "text": "ネットワークインターフェースを設定する"
  }, {
    "label": "C",
    "text": "ディスクのパーティションを作成する"
  }, {
    "label": "D",
    "text": "カーネルモジュールを一覧表示する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、dmidecodeコマンドの用途",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、dmidecode"],
  "answerTexts": ["SMBIOSテーブルからハードウェア情報を表示する"],
  "answerHints": ["SMBIOS"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 292,
  "source": "想定",
  "type": "single",
  "question": "dmidecodeコマンドの用途として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "SMBIOSテーブルからハードウェア情報を表示する"
  }, {
    "label": "B",
    "text": "ネットワークインターフェースを設定する"
  }, {
    "label": "C",
    "text": "ディスクのパーティションを作成する"
  }, {
    "label": "D",
    "text": "カーネルモジュールを一覧表示する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "dmidecodeコマンドの用途",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dmidecodeコマンドの用途として適切な"],
  "answerTexts": ["SMBIOSテーブルからハードウェア情報を表示する"],
  "answerHints": ["SMBIOS"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 305,
  "source": "想定",
  "type": "single",
  "question": "次の中から、/proc/cpuinfoから確認できる情報はどれか。",
  "choices": [{
    "label": "A",
    "text": "CPUのモデル名、コア数、クロック周波数"
  }, {
    "label": "B",
    "text": "インストール済みパッケージの一覧"
  }, {
    "label": "C",
    "text": "マウントされたファイルシステムの一覧"
  }, {
    "label": "D",
    "text": "現在のネットワーク接続状況"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、/proc/cpuinfoから確認できる情報",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、/proc"],
  "answerTexts": ["CPUのモデル名、コア数、クロック周波数"],
  "answerHints": ["CPU"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 394,
  "source": "想定",
  "type": "single",
  "question": "/proc/cpuinfoから確認できる情報はどれか。",
  "choices": [{
    "label": "A",
    "text": "現在のネットワーク接続状況"
  }, {
    "label": "B",
    "text": "CPUのモデル名、コア数、クロック周波数"
  }, {
    "label": "C",
    "text": "マウントされたファイルシステムの一覧"
  }, {
    "label": "D",
    "text": "インストール済みパッケージの一覧"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "/proc/cpuinfoから確認できる情報",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/proc/"],
  "answerTexts": ["CPUのモデル名、コア数、クロック周波数"],
  "answerHints": ["CPU"],
  "chap": "第1章 システムアーキテクチャ"
}, {
  "id": 135,
  "source": "想定",
  "type": "single",
  "question": "RPMパッケージをインストールするrpmコマンドのオプションとして誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "-ivh"
  }, {
    "label": "B",
    "text": "-Uvh"
  }, {
    "label": "C",
    "text": "-qvh"
  }, {
    "label": "D",
    "text": "-evh"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "RPMパッケージをインストールするrpmコマンドのオプションとして誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["RPMパッケージを"],
  "answerTexts": ["-qvh"],
  "answerHints": ["-qvh"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 152,
  "source": "想定",
  "type": "single",
  "question": "yumリポジトリの設定ファイルが格納されるディレクトリはどれか。",
  "choices": [{
    "label": "A",
    "text": "/usr/share/yum/"
  }, {
    "label": "B",
    "text": "/etc/yum.repos.d/"
  }, {
    "label": "C",
    "text": "/etc/apt/sources.list.d/"
  }, {
    "label": "D",
    "text": "/var/lib/yum/"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "yumリポジトリの設定ファイルが格納されるディレクトリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["yumリポジトリの"],
  "answerTexts": ["/etc/yum.repos.d/"],
  "answerHints": ["/etc/yum"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 166,
  "source": "想定",
  "type": "single",
  "question": "Linuxのブートローダーとして一般的に使用されるものはどれか。",
  "choices": [{
    "label": "A",
    "text": "BOOTMGR"
  }, {
    "label": "B",
    "text": "GRUB2"
  }, {
    "label": "C",
    "text": "NTLDR"
  }, {
    "label": "D",
    "text": "LILO"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "Linuxのブートローダーとして一般的に使用される",
  "decisionKey": "",
  "mnemonic": "Linuxの定番ブートローダ＝GRUB2。「Linuxといえばグラブ(GRUB)」。",
  "answerKeys": ["Linuxのブートローダー"],
  "answerTexts": ["GRUB2"],
  "answerHints": ["GRUB2"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 258,
  "source": "想定",
  "type": "single",
  "question": "dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "dnf describe パッケージ名"
  }, {
    "label": "B",
    "text": "dnf info パッケージ名"
  }, {
    "label": "C",
    "text": "dnf detail パッケージ名"
  }, {
    "label": "D",
    "text": "dnf show パッケージ名"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "dnfコマンドでパッケージの詳細情報を表示するサブコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。"],
  "answerTexts": ["dnf info パッケージ名"],
  "answerHints": ["dnf info"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 365,
  "source": "想定",
  "type": "single",
  "question": "Linuxのブートローダーとして一般的に使用されるものはどれか。",
  "choices": [{
    "label": "A",
    "text": "BOOTMGR"
  }, {
    "label": "B",
    "text": "GRUB2"
  }, {
    "label": "C",
    "text": "LILO"
  }, {
    "label": "D",
    "text": "NTLDR"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "Linuxのブートローダーとして一般的に使用される",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Linuxのブートローダー"],
  "answerTexts": ["GRUB2"],
  "answerHints": ["GRUB2"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 398,
  "source": "想定",
  "type": "single",
  "question": "Linuxのブートローダーとして一般的に使用されるものはどれか。",
  "choices": [{
    "label": "A",
    "text": "GRUB2"
  }, {
    "label": "B",
    "text": "BOOTMGR"
  }, {
    "label": "C",
    "text": "NTLDR"
  }, {
    "label": "D",
    "text": "LILO"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "Linuxのブートローダー",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Linuxのブートローダー"],
  "answerTexts": ["GRUB2"],
  "answerHints": ["GRUB2"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100004,
  "source": "想定",
  "type": "single",
  "question": "apt-getでパッケージリストを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "apt-get dist-upgrade"
  }, {
    "label": "B",
    "text": "apt-get update"
  }, {
    "label": "C",
    "text": "apt-get refresh"
  }, {
    "label": "D",
    "text": "apt-get upgrade"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "apt-getでパッケージリストを更新する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["apt"],
  "answerTexts": ["apt-get update"],
  "answerHints": ["apt-get update"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100005,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ソースコードからソフトウェアをビルドする際の一般的な手順として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "make install -> make -> configure"
  }, {
    "label": "B",
    "text": "make -> configure -> make install"
  }, {
    "label": "C",
    "text": "configure -> make install -> make"
  }, {
    "label": "D",
    "text": "configure -> make -> make install"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、ソースコードからソフトウェアをビルドする際の一般的な手順",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ソースコード"],
  "answerTexts": ["configure -> make -> make install"],
  "answerHints": ["configure -> make -"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100006,
  "source": "想定",
  "type": "single",
  "question": "次の中から、apt-getでパッケージリストを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "apt-get upgrade"
  }, {
    "label": "B",
    "text": "apt-get dist-upgrade"
  }, {
    "label": "C",
    "text": "apt-get update"
  }, {
    "label": "D",
    "text": "apt-get refresh"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、apt-getでパッケージリストを更新する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、apt"],
  "answerTexts": ["apt-get update"],
  "answerHints": ["apt-get update"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100007,
  "source": "想定",
  "type": "single",
  "question": "apt-getでパッケージリストを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "apt-get dist-upgrade"
  }, {
    "label": "B",
    "text": "apt-get update"
  }, {
    "label": "C",
    "text": "apt-get upgrade"
  }, {
    "label": "D",
    "text": "apt-get refresh"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "apt-getでパッケージリストを更新する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["apt"],
  "answerTexts": ["apt-get update"],
  "answerHints": ["apt-get update"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100008,
  "source": "想定",
  "type": "single",
  "question": "dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "dnf show パッケージ名"
  }, {
    "label": "B",
    "text": "dnf detail パッケージ名"
  }, {
    "label": "C",
    "text": "dnf describe パッケージ名"
  }, {
    "label": "D",
    "text": "dnf info パッケージ名"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "dnfコマンドでパッケージの詳細情報を表示するサブコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。"],
  "answerTexts": ["dnf info パッケージ名"],
  "answerHints": ["dnf info"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100009,
  "source": "想定",
  "type": "single",
  "question": "dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "dnf info パッケージ名"
  }, {
    "label": "B",
    "text": "dnf show パッケージ名"
  }, {
    "label": "C",
    "text": "dnf detail パッケージ名"
  }, {
    "label": "D",
    "text": "dnf describe パッケージ名"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "dnfコマンドでパッケージの詳細情報を表示するサブコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。"],
  "answerTexts": ["dnf info パッケージ名"],
  "answerHints": ["dnf info"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100010,
  "source": "想定",
  "type": "single",
  "question": "Debianベースのシステムでパッケージをインストールするコマンドとして適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "apt install パッケージ名"
  }, {
    "label": "B",
    "text": "dnf install パッケージ名"
  }, {
    "label": "C",
    "text": "zypper install パッケージ名"
  }, {
    "label": "D",
    "text": "yum install パッケージ名"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "Debianベースのシステムでパッケージをインストールするコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Debianベース"],
  "answerTexts": ["apt install パッケージ名"],
  "answerHints": ["apt"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100011,
  "source": "想定",
  "type": "single",
  "question": "次の中から、apt-getでパッケージリストを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "apt-get upgrade"
  }, {
    "label": "B",
    "text": "apt-get dist-upgrade"
  }, {
    "label": "C",
    "text": "apt-get update"
  }, {
    "label": "D",
    "text": "apt-get refresh"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、apt-getでパッケージリストを更新する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、apt"],
  "answerTexts": ["apt-get update"],
  "answerHints": ["apt-get update"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100012,
  "source": "想定",
  "type": "single",
  "question": "MBRパーティションテーブルで作成可能なプライマリパーティションの最大数はいくつか。",
  "choices": [{
    "label": "A",
    "text": "16"
  }, {
    "label": "B",
    "text": "無制限"
  }, {
    "label": "C",
    "text": "4"
  }, {
    "label": "D",
    "text": "8"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "MBRパーティションテーブルで作成可能なプライマリパーティション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["MBR"],
  "answerTexts": ["4"],
  "answerHints": ["4"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100013,
  "source": "想定",
  "type": "single",
  "question": "次の中から、MBRパーティションテーブルで作成可能なプライマリパーティションの最大数はいくつか。",
  "choices": [{
    "label": "A",
    "text": "4"
  }, {
    "label": "B",
    "text": "16"
  }, {
    "label": "C",
    "text": "8"
  }, {
    "label": "D",
    "text": "無制限"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、MBRパーティションテーブルで作成可能なプライマリパーティション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、MBR"],
  "answerTexts": ["4"],
  "answerHints": ["4"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 129,
  "source": "想定",
  "type": "single",
  "question": "次の中から、yumリポジトリの設定ファイルが格納されるディレクトリはどれか。",
  "choices": [{
    "label": "A",
    "text": "/etc/apt/sources.list.d/"
  }, {
    "label": "B",
    "text": "/usr/share/yum/"
  }, {
    "label": "C",
    "text": "/var/lib/yum/"
  }, {
    "label": "D",
    "text": "/etc/yum.repos.d/"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、yumリポジトリの設定ファイルが格納されるディレクトリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、yum"],
  "answerTexts": ["/etc/yum.repos.d/"],
  "answerHints": ["/etc/yum"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 164,
  "source": "想定",
  "type": "single",
  "question": "共有ライブラリの検索パスを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "ldconfig"
  }, {
    "label": "B",
    "text": "ldpath"
  }, {
    "label": "C",
    "text": "ldd"
  }, {
    "label": "D",
    "text": "libupdate"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "共有ライブラリの検索パスを更新するコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["共有"],
  "answerTexts": ["ldconfig"],
  "answerHints": ["ldconfig"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 187,
  "source": "想定",
  "type": "single",
  "question": "yumリポジトリの設定ファイルが格納されるディレクトリはどれか。",
  "choices": [{
    "label": "A",
    "text": "/usr/share/yum/"
  }, {
    "label": "B",
    "text": "/etc/yum.repos.d/"
  }, {
    "label": "C",
    "text": "/etc/apt/sources.list.d/"
  }, {
    "label": "D",
    "text": "/var/lib/yum/"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "yumリポジトリの設定ファイルが格納されるディレクトリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["yumリポジトリの"],
  "answerTexts": ["/etc/yum.repos.d/"],
  "answerHints": ["/etc/yum"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 218,
  "source": "想定",
  "type": "single",
  "question": "yumリポジトリの設定ファイルが格納されるディレクトリはどれか。",
  "choices": [{
    "label": "A",
    "text": "/usr/share/yum/"
  }, {
    "label": "B",
    "text": "/etc/yum.repos.d/"
  }, {
    "label": "C",
    "text": "/etc/apt/sources.list.d/"
  }, {
    "label": "D",
    "text": "/var/lib/yum/"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "yumリポジトリの設定ファイルが格納されるディレクトリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["yumリポジトリの"],
  "answerTexts": ["/etc/yum.repos.d/"],
  "answerHints": ["/etc/yum"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 226,
  "source": "想定",
  "type": "single",
  "question": "Linuxのブートローダーとして一般的に使用されるものはどれか。",
  "choices": [{
    "label": "A",
    "text": "BOOTMGR"
  }, {
    "label": "B",
    "text": "NTLDR"
  }, {
    "label": "C",
    "text": "GRUB2"
  }, {
    "label": "D",
    "text": "LILO"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "Linuxのブートローダーとして一般的に使用されるもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Linuxのブートローダー"],
  "answerTexts": ["GRUB2"],
  "answerHints": ["GRUB2"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 230,
  "source": "想定",
  "type": "single",
  "question": "dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか",
  "choices": [{
    "label": "A",
    "text": "dnf describe パッケージ名"
  }, {
    "label": "B",
    "text": "dnf detail パッケージ名"
  }, {
    "label": "C",
    "text": "dnf info パッケージ名"
  }, {
    "label": "D",
    "text": "dnf show パッケージ名"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "dnfコマンドでパッケージの詳細情報を表示するサブコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか"],
  "answerTexts": ["dnf info パッケージ名"],
  "answerHints": ["dnf info"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 241,
  "source": "想定",
  "type": "single",
  "question": "Linuxのブートローダーとして一般的に使用されるものはどれか。",
  "choices": [{
    "label": "A",
    "text": "BOOTMGR"
  }, {
    "label": "B",
    "text": "NTLDR"
  }, {
    "label": "C",
    "text": "LILO"
  }, {
    "label": "D",
    "text": "GRUB2"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "Linuxのブートローダーとして一般的に使用されるもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Linuxのブートローダー"],
  "answerTexts": ["GRUB2"],
  "answerHints": ["GRUB2"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 256,
  "source": "想定",
  "type": "single",
  "question": "MBRパーティションテーブルで作成可能なプライマリパーティションの最大数はいくつか。",
  "choices": [{
    "label": "A",
    "text": "無制限"
  }, {
    "label": "B",
    "text": "16"
  }, {
    "label": "C",
    "text": "4"
  }, {
    "label": "D",
    "text": "8"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "MBRパーティションテーブルで作成可能なプライマリパーティション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["MBR"],
  "answerTexts": ["4"],
  "answerHints": ["4"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 257,
  "source": "想定",
  "type": "single",
  "question": "RPMパッケージをインストールするrpmコマンドのオプションとして誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "-Uvh"
  }, {
    "label": "B",
    "text": "-qvh"
  }, {
    "label": "C",
    "text": "-evh"
  }, {
    "label": "D",
    "text": "-ivh"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "RPMパッケージをインストールするrpmコマンドのオプションとして誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["RPMパッケージを"],
  "answerTexts": ["-qvh"],
  "answerHints": ["-qvh"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 316,
  "source": "想定",
  "type": "single",
  "question": "次の中から、共有ライブラリの検索パスを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "jibupdate"
  }, {
    "label": "B",
    "text": "ldpath"
  }, {
    "label": "C",
    "text": "ldconfig"
  }, {
    "label": "D",
    "text": "ldd"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、共有ライブラリの検索パスを更新する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、共有"],
  "answerTexts": ["ldconfig"],
  "answerHints": ["ldconfig"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 340,
  "source": "想定",
  "type": "single",
  "question": "次の中から、debianベースのシステムでパッケージをインストールするコマンドとして正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "dnf install パッケージ名"
  }, {
    "label": "B",
    "text": "zypper install パッケージ名"
  }, {
    "label": "C",
    "text": "yum install パッケージ名"
  }, {
    "label": "D",
    "text": "apt install パッケージ名"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、debianベースのシステムでパッケージをインストールする",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、debian"],
  "answerTexts": ["apt install パッケージ名"],
  "answerHints": ["apt"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 350,
  "source": "想定",
  "type": "single",
  "question": "次の中から、linuxのブートローダーとして一般的に使用されるものはどれか。",
  "choices": [{
    "label": "A",
    "text": "BOOTMGR"
  }, {
    "label": "B",
    "text": "LILO"
  }, {
    "label": "C",
    "text": "GRUB2"
  }, {
    "label": "D",
    "text": "NTLDR"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、linuxのブートローダーとして一般的に使用される",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、linux"],
  "answerTexts": ["GRUB2"],
  "answerHints": ["GRUB2"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 362,
  "source": "想定",
  "type": "single",
  "question": "次の中から、MBRパーティションテーブルで作成可能なプライマリパーティションの最大数はいくつか。",
  "choices": [{
    "label": "A",
    "text": "8"
  }, {
    "label": "B",
    "text": "無制限"
  }, {
    "label": "C",
    "text": "16"
  }, {
    "label": "D",
    "text": "4"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、MBRパーティションテーブルで作成可能なプライマリパーティションの最大数",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、MBR"],
  "answerTexts": ["4"],
  "answerHints": ["4"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 373,
  "source": "想定",
  "type": "single",
  "question": "yumリポジトリの設定ファイルが格納されるディレクトリはどれか。",
  "choices": [{
    "label": "A",
    "text": "/usr/share/yum"
  }, {
    "label": "B",
    "text": "/var/lib/yum/"
  }, {
    "label": "C",
    "text": "/etc/apt/sources.list.d/"
  }, {
    "label": "D",
    "text": "/etc/yum.repos.d/"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "yumリポジトリの設定ファイルが格納されるディレクトリ",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["yumリポジトリの"],
  "answerTexts": ["/etc/yum.repos.d/"],
  "answerHints": ["/etc/yum"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 374,
  "source": "想定",
  "type": "single",
  "question": "apt-getでパッケージリストを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "apt-get upgrade"
  }, {
    "label": "B",
    "text": "apt-get refresh"
  }, {
    "label": "C",
    "text": "apt-get distupgrade"
  }, {
    "label": "D",
    "text": "apt-get update"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "apt-getでパッケージリストを更新する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["apt"],
  "answerTexts": ["apt-get update"],
  "answerHints": ["apt-get update"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 418,
  "source": "想定",
  "type": "single",
  "question": "Debianベースのシステムでパッケージをインストールするコマンドとして適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "yum install パッケージ名"
  }, {
    "label": "B",
    "text": "dnf install パッケージ名"
  }, {
    "label": "C",
    "text": "apt install パッケージ名"
  }, {
    "label": "D",
    "text": "zypper install パッケージ名"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "Debianベースのシステムでパッケージをインストールする",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["Debianベース"],
  "answerTexts": ["apt install パッケージ名"],
  "answerHints": ["apt"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 175,
  "source": "想定",
  "type": "single",
  "question": "ソースコードからソフトウェアをビルドする際の一般的な手順として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "./configure → make install → make"
  }, {
    "label": "B",
    "text": "make → ./configure → make install"
  }, {
    "label": "C",
    "text": "make install → make → ./configure"
  }, {
    "label": "D",
    "text": "./configure → make → make install"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "ソースコードからソフトウェアをビルドする際の一般的な手順",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ソースコード"],
  "answerTexts": ["./configure → make → make install"],
  "answerHints": ["./configure → make →"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 203,
  "source": "想定",
  "type": "single",
  "question": "次の中から、RPMパッケージをインストールするrpmコマンドのオプションとして正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "-Uvh"
  }, {
    "label": "B",
    "text": "-evh"
  }, {
    "label": "C",
    "text": "-qvh"
  }, {
    "label": "D",
    "text": "-ivh"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、RPMパッケージをインストールするrpmコマンドのオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、RPM"],
  "answerTexts": ["-ivh"],
  "answerHints": ["-ivh"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 413,
  "source": "想定",
  "type": "single",
  "question": "次の中から、共有ライブラリの検索パスを更新するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "ldconfig"
  }, {
    "label": "B",
    "text": "ldd"
  }, {
    "label": "C",
    "text": "ldpath"
  }, {
    "label": "D",
    "text": "Hbupdate"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、共有ライブラリの検索パスを更新するコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、共有"],
  "answerTexts": ["ldconfig"],
  "answerHints": ["ldconfig"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 416,
  "source": "想定",
  "type": "single",
  "question": "dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "dnf describe パッケージ名"
  }, {
    "label": "B",
    "text": "dnf show パッケージ名"
  }, {
    "label": "C",
    "text": "dnf detail パッケージ名"
  }, {
    "label": "D",
    "text": "dnf info パッケージ名"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "dnfコマンドでパッケージの詳細情報を表示するサブコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["dnfコマンドでパッケージの詳細情報を表示するサブコマンドはどれか。"],
  "answerTexts": ["dnf info パッケージ名"],
  "answerHints": ["dnf"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 434,
  "source": "想定",
  "type": "single",
  "question": "ソースコードからソフトウェアをビルドする際の一般的な手順として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "./configure → make install → make"
  }, {
    "label": "B",
    "text": "make install → make → ./configure"
  }, {
    "label": "C",
    "text": "./configure → make → make install"
  }, {
    "label": "D",
    "text": "make → ./configure → make install"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ソースコードからソフトウェアをビルドする際の一般的な手順",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ソースコード"],
  "answerTexts": ["./configure → make → make install"],
  "answerHints": ["./configure"],
  "chap": "第2章 Linuxのインストールとパッケージ管理"
}, {
  "id": 100016,
  "source": "想定",
  "type": "single",
  "question": "wcコマンドでファイルの行数のみを表示するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-c"
  }, {
    "label": "B",
    "text": "-w"
  }, {
    "label": "C",
    "text": "-l"
  }, {
    "label": "D",
    "text": "-m"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "wcコマンドでファイルの行数のみを表示するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["wc"],
  "answerTexts": ["-l"],
  "answerHints": ["-l"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100017,
  "source": "想定",
  "type": "single",
  "question": "標準エラー出力をファイルにリダイレクトする記述として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "command 2> error.log"
  }, {
    "label": "B",
    "text": "command 2>> error.log"
  }, {
    "label": "C",
    "text": "command &> error.log"
  }, {
    "label": "D",
    "text": "command > error.log"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "標準エラー出力をファイルにリダイレクトする記述として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["標準エラー出力をファイルにリダイレクトする記述として誤ってい"],
  "answerTexts": ["command > error.log"],
  "answerHints": ["command >"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100018,
  "source": "想定",
  "type": "single",
  "question": "次の中から、wcコマンドでファイルの行数のみを表示するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-m"
  }, {
    "label": "B",
    "text": "-c"
  }, {
    "label": "C",
    "text": "-l"
  }, {
    "label": "D",
    "text": "-w"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、wcコマンドでファイルの行数のみを表示するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、wc"],
  "answerTexts": ["-l"],
  "answerHints": ["-l"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100019,
  "source": "想定",
  "type": "single",
  "question": "パイプ (|) の機能として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "2つのコマンドを並列に実行する"
  }, {
    "label": "B",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }, {
    "label": "C",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }, {
    "label": "D",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "パイプ (|) の機能として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パイプ (|) の機能として誤ってい"],
  "answerTexts": ["前のコマンドの標準エラーを次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準エラー"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100020,
  "source": "想定",
  "type": "single",
  "question": "次の中から、wcコマンドでファイルの行数のみを表示するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-l"
  }, {
    "label": "B",
    "text": "-c"
  }, {
    "label": "C",
    "text": "-m"
  }, {
    "label": "D",
    "text": "-w"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、wcコマンドでファイルの行数のみを表示するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、wc"],
  "answerTexts": ["-l"],
  "answerHints": ["-l"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100021,
  "source": "想定",
  "type": "single",
  "question": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "find /home -name \"*.txt\""
  }, {
    "label": "B",
    "text": "find /home -search \"*.txt\""
  }, {
    "label": "C",
    "text": "find /home -type \"*.txt\""
  }, {
    "label": "D",
    "text": "find /home -ext txt"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。"],
  "answerTexts": ["find /home -name \"*.txt\""],
  "answerHints": ["find /home -name"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 131,
  "source": "想定",
  "type": "single",
  "question": "headコマンドでファイルの先頭20行を表示するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "head -c 20"
  }, {
    "label": "B",
    "text": "head -p 20"
  }, {
    "label": "C",
    "text": "head -120"
  }, {
    "label": "D",
    "text": "head -n 20"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "headコマンドでファイルの先頭20行を表示するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["head"],
  "answerTexts": ["head -n 20"],
  "answerHints": ["head -n"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 136,
  "source": "想定",
  "type": "single",
  "question": "xargsコマンドの用途として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "プロセスの優先度を変更する"
  }, {
    "label": "B",
    "text": "標準入力からの引数リストを使ってコマンドを実行する"
  }, {
    "label": "C",
    "text": "ファイルのパーミッションを変更する"
  }, {
    "label": "D",
    "text": "ファイルを圧縮する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "xargsコマンドの用途として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["xargsコマンドの用途として誤ってい"],
  "answerTexts": ["ファイルを圧縮する"],
  "answerHints": ["ファイルを"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 172,
  "source": "想定",
  "type": "single",
  "question": "次の中から、teeコマンドの機能として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの内容を2つに分割する"
  }, {
    "label": "B",
    "text": "標準入力をファイルと標準出力の両方に書き込む"
  }, {
    "label": "C",
    "text": "ファイルの末尾を表示する"
  }, {
    "label": "D",
    "text": "2つのファイルの差分を表示する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、teeコマンドの機能",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、tee"],
  "answerTexts": ["標準入力をファイルと標準出力の両方に書き込む"],
  "answerHints": ["標準入力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 205,
  "source": "想定",
  "type": "single",
  "question": "次の中から、パイプ (|) の機能として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }, {
    "label": "B",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }, {
    "label": "C",
    "text": "2つのコマンドを並列に実行する"
  }, {
    "label": "D",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、パイプ (|) の機能",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、パイプ"],
  "answerTexts": ["前のコマンドの標準出力を次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準出力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 278,
  "source": "想定",
  "type": "single",
  "question": "teeコマンドの機能として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの末尾を表示する"
  }, {
    "label": "B",
    "text": "標準入力をファイルと標準出力の両方に書き込む"
  }, {
    "label": "C",
    "text": "2つのファイルの差分を表示する"
  }, {
    "label": "D",
    "text": "ファイルの内容を2つに分割する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "teeコマンドの機能として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["teeコマンドの機能として誤ってい"],
  "answerTexts": ["ファイルの末尾を表示する"],
  "answerHints": ["ファイルの末尾を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 290,
  "source": "想定",
  "type": "single",
  "question": "uniqコマンドの前提条件として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "root権限が必要である"
  }, {
    "label": "B",
    "text": "入力データが事前にソートされている必要がある"
  }, {
    "label": "C",
    "text": "入力ファイルがバイナリ形式である必要がある"
  }, {
    "label": "D",
    "text": "入力がパイプからである必要がある"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "uniqコマンドの前提条件として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["uniqコマンドの前提条件として誤ってい"],
  "answerTexts": ["root権限が必要である"],
  "answerHints": ["root"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 301,
  "source": "想定",
  "type": "single",
  "question": "次の中から、標準エラー出力をファイルにリダイレクトする記述として正しいものはどれか",
  "choices": [{
    "label": "A",
    "text": "command > error.log"
  }, {
    "label": "B",
    "text": "command 1> error.log"
  }, {
    "label": "C",
    "text": "command < error.log"
  }, {
    "label": "D",
    "text": "command 2> error.log"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、標準エラー出力をファイルにリダイレクトする",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、標準"],
  "answerTexts": ["command 2> error.log"],
  "answerHints": ["command 2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 309,
  "source": "想定",
  "type": "single",
  "question": "次の中から、teeコマンドの機能として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの末尾を表示する"
  }, {
    "label": "B",
    "text": "2つのファイルの差分を表示する"
  }, {
    "label": "C",
    "text": "ファイルの内容を2つに分割する"
  }, {
    "label": "D",
    "text": "標準入力をファイルと標準出力の両方に書き込む"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、teeコマンドの機能",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、tee"],
  "answerTexts": ["標準入力をファイルと標準出力の両方に書き込む"],
  "answerHints": ["標準入力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 348,
  "source": "想定",
  "type": "single",
  "question": "パイプ (|) の機能として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "2つのコマンドを並列に実行する"
  }, {
    "label": "B",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }, {
    "label": "C",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }, {
    "label": "D",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "パイプ (|) の機能として適切な説明",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パイプ (|) の機能として適切な"],
  "answerTexts": ["前のコマンドの標準出力を次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準出力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 395,
  "source": "想定",
  "type": "single",
  "question": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "B",
    "text": "sed replace/old/new' file"
  }, {
    "label": "C",
    "text": "sed 'change old new fe"
  }, {
    "label": "D",
    "text": "sed 'old/new/alH file"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "sedコマンドでファイル内のすべての'old'をnew'に置換する",
  "decisionKey": "",
  "mnemonic": "sedの置換＝s/old/new/。「sedのsはsubstitute（置換）」。",
  "answerKeys": ["sedコマンドでファイル内のすべての'old'をnew"],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 414,
  "source": "想定",
  "type": "single",
  "question": "次の中から、xargsコマンドの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルを圧縮する"
  }, {
    "label": "B",
    "text": "プロセスの優先度を変更する"
  }, {
    "label": "C",
    "text": "ファイルのパーミッションを変更する"
  }, {
    "label": "D",
    "text": "標準入力からの引数リストを使ってコマンドを実行する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、xargsコマンドの用途",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、xargs"],
  "answerTexts": ["標準入力からの引数リストを使ってコマンドを実行する"],
  "answerHints": ["標準入力からの"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 441,
  "source": "想定",
  "type": "single",
  "question": "wcコマンドでファイルの行数のみを表示するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-l"
  }, {
    "label": "B",
    "text": "-m"
  }, {
    "label": "C",
    "text": "-c"
  }, {
    "label": "D",
    "text": "-w"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "wcコマンドでファイルの行数のみを表示する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["wc"],
  "answerTexts": ["-l"],
  "answerHints": ["-l"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100022,
  "source": "想定",
  "type": "single",
  "question": "次の中から、sortコマンドで数値順にソートするオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-k"
  }, {
    "label": "B",
    "text": "-n"
  }, {
    "label": "C",
    "text": "+"
  }, {
    "label": "D",
    "text": "Tr"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、sortコマンドで数値順にソートする",
  "decisionKey": "",
  "mnemonic": "sortの数値順＝-n。「number（数字）のn」。",
  "answerKeys": ["次の中から、sort"],
  "answerTexts": ["-n"],
  "answerHints": ["-n"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100024,
  "source": "想定",
  "type": "single",
  "question": "ファイルの内容を行番号付きで表示するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "cat -n"
  }, {
    "label": "B",
    "text": "cat -b"
  }, {
    "label": "C",
    "text": "less -n"
  }, {
    "label": "D",
    "text": "more -n"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "ファイルの内容を行番号付きで表示するコマンド",
  "decisionKey": "",
  "mnemonic": "行番号付き表示＝cat -n。「number（番号）のn」。",
  "answerKeys": ["ファイルの"],
  "answerTexts": ["cat -n"],
  "answerHints": ["cat -n"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100026,
  "source": "想定",
  "type": "single",
  "question": "uniqコマンドの前提条件として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "root権限が必要である"
  }, {
    "label": "B",
    "text": "入力データが事前にソートされている必要がある"
  }, {
    "label": "C",
    "text": "入力がパイプからである必要がある"
  }, {
    "label": "D",
    "text": "入力ファイルがバイナリ形式である必要がある"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "uniqコマンドの前提条件",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["uniqコマンドの前提条件として正しいも"],
  "answerTexts": ["入力データが事前にソートされている必要がある"],
  "answerHints": ["入力データ"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100027,
  "source": "想定",
  "type": "single",
  "question": "awkコマンドでファイルの第2フィールドを表示する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "awk '{field 2}' file"
  }, {
    "label": "B",
    "text": "awk '{print $1}' file"
  }, {
    "label": "C",
    "text": "awk '{column 2}' file"
  }, {
    "label": "D",
    "text": "awk '{print $2}' file"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "awkコマンドでファイルの第2フィールドを表示",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["awk"],
  "answerTexts": ["awk '{print $2}' file"],
  "answerHints": ["awk '{print $2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100029,
  "source": "想定",
  "type": "single",
  "question": "xargsコマンドの用途として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルのパーミッションを変更する"
  }, {
    "label": "B",
    "text": "プロセスの優先度を変更する"
  }, {
    "label": "C",
    "text": "ファイルを圧縮する"
  }, {
    "label": "D",
    "text": "標準入力からの引数リストを使ってコマンドを実行する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "xargsコマンドの用途として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["xargsコマンドの用途として誤ってい"],
  "answerTexts": ["ファイルを圧縮する"],
  "answerHints": ["ファイルを"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100030,
  "source": "想定",
  "type": "single",
  "question": "xargsコマンドの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルを圧縮する"
  }, {
    "label": "B",
    "text": "プロセスの優先度を変更する"
  }, {
    "label": "C",
    "text": "標準入力からの引数リストを使ってコマンドを実行する"
  }, {
    "label": "D",
    "text": "ファイルのパーミッションを変更する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "xargsコマンドの用途として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["xargsコマンドの用途として正しいも"],
  "answerTexts": ["標準入力からの引数リストを使ってコマンドを実行する"],
  "answerHints": ["標準入力からの"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100031,
  "source": "想定",
  "type": "single",
  "question": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 's/old/new/' file"
  }, {
    "label": "B",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "C",
    "text": "sed 'change old new' file"
  }, {
    "label": "D",
    "text": "sed 'replace/old/new' file"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "sedコマンドでファイル内のすべての'old'を'new'に置換する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sedコマンドでファイル内のすべての'old'を'"],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's/old/new/g"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100032,
  "source": "想定",
  "type": "single",
  "question": "標準エラー出力をファイルにリダイレクトする記述として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "command 1> error.log"
  }, {
    "label": "B",
    "text": "command &> error.log"
  }, {
    "label": "C",
    "text": "command > error.log"
  }, {
    "label": "D",
    "text": "command 2> error.log"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "標準エラー出力をファイルにリダイレクト",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["標準エラー出力をファイルにリダイレクトする記述として正しいも"],
  "answerTexts": ["command 2> error.log"],
  "answerHints": ["command 2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100033,
  "source": "想定",
  "type": "single",
  "question": "awkコマンドでファイルの第2フィールドを表示する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "awk '{column $2}' file"
  }, {
    "label": "B",
    "text": "awk '{print $2}' file"
  }, {
    "label": "C",
    "text": "awk '{field $2}' file"
  }, {
    "label": "D",
    "text": "awk '{print $1}' file"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "awkコマンドでファイルの第2フィールドを表示",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["awk"],
  "answerTexts": ["awk '{print $2}' file"],
  "answerHints": ["awk '{print $2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100035,
  "source": "想定",
  "type": "single",
  "question": "次の中から、awkコマンドでファイルの第2フィールドを表示する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "awk '{column $2}' file"
  }, {
    "label": "B",
    "text": "awk '{print $2}' file"
  }, {
    "label": "C",
    "text": "awk '{field $2}' file"
  }, {
    "label": "D",
    "text": "awk '{print $1}' file"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、awkコマンドでファイルの第2フィールドを表示する正しい記述",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、awk"],
  "answerTexts": ["awk '{print $2}' file"],
  "answerHints": ["awk '{print $2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100036,
  "source": "想定",
  "type": "single",
  "question": "標準エラー出力をファイルにリダイレクトする記述として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "command 2> error.log"
  }, {
    "label": "B",
    "text": "command 2>> error.log"
  }, {
    "label": "C",
    "text": "command 2>&1 error.log"
  }, {
    "label": "D",
    "text": "command 1> error.log"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "標準エラー出力をファイルにリダイレクト",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["標準エラー出力をファイルにリダイレクトする記述として誤ってい"],
  "answerTexts": ["command 1> error.log"],
  "answerHints": ["command 1"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100037,
  "source": "想定",
  "type": "single",
  "question": "sortコマンドで数値順にソートするオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-t"
  }, {
    "label": "B",
    "text": "-k"
  }, {
    "label": "C",
    "text": "+"
  }, {
    "label": "D",
    "text": "-n"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "sortコマンドで数値順にソート",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sortコマンドで数値順にソートするオプションはどれか。"],
  "answerTexts": ["-n"],
  "answerHints": ["-n"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100038,
  "source": "想定",
  "type": "single",
  "question": "tarコマンドでgzip圧縮されたアーカイブを展開するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-rzf"
  }, {
    "label": "B",
    "text": "-tzf"
  }, {
    "label": "C",
    "text": "-cgf"
  }, {
    "label": "D",
    "text": "-xzf"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "tarコマンドでgzip圧縮されたアーカイブを展開",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["tar"],
  "answerTexts": ["-xzf"],
  "answerHints": ["-xzf"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100039,
  "source": "想定",
  "type": "single",
  "question": "uniqコマンドの前提条件として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "入力データが事前にソートされている必要がある"
  }, {
    "label": "B",
    "text": "入力ファイルがバイナリ形式である必要がある"
  }, {
    "label": "C",
    "text": "入力がパイプからである必要がある"
  }, {
    "label": "D",
    "text": "root権限が必要である"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "uniqコマンドの前提条件",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["uniqコマンドの前提条件として適切な"],
  "answerTexts": ["入力データが事前にソートされている必要がある"],
  "answerHints": ["入力データ"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 121,
  "source": "想定",
  "type": "single",
  "question": "uniqコマンドの前提条件として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "root権限が必要である"
  }, {
    "label": "B",
    "text": "入力がパイプからである必要がある"
  }, {
    "label": "C",
    "text": "入力データが事前にソートされている必要がある"
  }, {
    "label": "D",
    "text": "入力ファイルがバイナリ形式である必要がある"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "uniqコマンドの前提条件",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["uniqコマンドの前提条件として適切な"],
  "answerTexts": ["入力データが事前にソートされている必要がある"],
  "answerHints": ["入力データ"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 142,
  "source": "想定",
  "type": "single",
  "question": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "find /home -ext txt"
  }, {
    "label": "B",
    "text": "find /home -type \"*.txt\""
  }, {
    "label": "C",
    "text": "find /home -name \"*.txt\""
  }, {
    "label": "D",
    "text": "find /home -search \"*.txt\""
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。"],
  "answerTexts": ["find /home -name \"*.txt\""],
  "answerHints": ["find /home -name"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 145,
  "source": "想定",
  "type": "single",
  "question": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "B",
    "text": "sed 'old/new/all' file"
  }, {
    "label": "C",
    "text": "sed 'change old new' file"
  }, {
    "label": "D",
    "text": "sed 'replace/old/new' file"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "sedコマンドでファイル内のすべてのold'をnew'に置換",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sedコマンドでファイル内のすべてのold"],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 177,
  "source": "想定",
  "type": "single",
  "question": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "find /home -search \"*.txt\""
  }, {
    "label": "B",
    "text": "find /home -type \"*.txt\""
  }, {
    "label": "C",
    "text": "find /home -name \"*.txt\""
  }, {
    "label": "D",
    "text": "find /home -ext txt"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。"],
  "answerTexts": ["find /home -name \"*.txt\""],
  "answerHints": ["find /home -name"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 194,
  "source": "想定",
  "type": "single",
  "question": "wcコマンドでファイルの行数のみを表示するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-m"
  }, {
    "label": "B",
    "text": "-w"
  }, {
    "label": "C",
    "text": "-l"
  }, {
    "label": "D",
    "text": "-c"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "wcコマンドでファイルの行数のみを表示するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["wc"],
  "answerTexts": ["-l"],
  "answerHints": ["-l"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 195,
  "source": "想定",
  "type": "single",
  "question": "cutコマンドでCSVファイルの第3フィールドを抽出する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "cut -d',' -f3 file.csv"
  }, {
    "label": "B",
    "text": "cut -*-p3 file.csv"
  }, {
    "label": "C",
    "text": "cut -c3 file.csv"
  }, {
    "label": "D",
    "text": "cut -S'! -n3 file.csv"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "cutコマンドでCSVファイルの第3フィールドを抽出する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["cutコマンドでCSVファイルの第3フィールドを抽出する正しい記述はどれか。"],
  "answerTexts": ["cut -d',' -f3 file.csv"],
  "answerHints": ["cut -d"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 227,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ファイルの内容を行番号付きで表示するコマンドはどれか。",
  "choices": [{
    "label": "A",
    "text": "less -n"
  }, {
    "label": "B",
    "text": "more -n"
  }, {
    "label": "C",
    "text": "cat -n"
  }, {
    "label": "D",
    "text": "cat -b"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、ファイルの内容を行番号付きで表示するコマンド",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ファイルの"],
  "answerTexts": ["cat -n"],
  "answerHints": ["cat -n"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 250,
  "source": "想定",
  "type": "single",
  "question": "uniqコマンドの前提条件として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "入力データが事前にソートされている必要がある"
  }, {
    "label": "B",
    "text": "root権限が必要である"
  }, {
    "label": "C",
    "text": "入力がパイプからである必要がある"
  }, {
    "label": "D",
    "text": "入力ファイルがバイナリ形式である必要がある"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "uniqコマンドの前提条件",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["uniqコマンドの前提条件として適切な"],
  "answerTexts": ["入力データが事前にソートされている必要がある"],
  "answerHints": ["入力データ"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 259,
  "source": "想定",
  "type": "single",
  "question": "teeコマンドの機能として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの末尾を表示する"
  }, {
    "label": "B",
    "text": "2つのファイルの差分を表示する"
  }, {
    "label": "C",
    "text": "標準入力をファイルと標準出力の両方に書き込む"
  }, {
    "label": "D",
    "text": "ファイルの内容を2つに分割する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "teeコマンドの機能",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["teeコマンドの機能として正しいも"],
  "answerTexts": ["標準入力をファイルと標準出力の両方に書き込む"],
  "answerHints": ["標準入力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 266,
  "source": "想定",
  "type": "single",
  "question": "パイプ (|) の機能として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "2つのコマンドを並列に実行する"
  }, {
    "label": "B",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }, {
    "label": "C",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }, {
    "label": "D",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "パイプ (|) の機能",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パイプ (|) の機能として適切な"],
  "answerTexts": ["前のコマンドの標準出力を次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準出力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 283,
  "source": "想定",
  "type": "single",
  "question": "tarコマンドでgzip圧縮されたアーカイブを展開するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-czf"
  }, {
    "label": "B",
    "text": "-tsf"
  }, {
    "label": "C",
    "text": "-rzf"
  }, {
    "label": "D",
    "text": "-xzf"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "tarコマンドでgzip圧縮されたアーカイブを展開する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["tar"],
  "answerTexts": ["-xzf"],
  "answerHints": ["-xzf"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 320,
  "source": "想定",
  "type": "single",
  "question": "次の中から、headコマンドでファイルの先頭20行を表示するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "head -p 20"
  }, {
    "label": "B",
    "text": "head -l 20"
  }, {
    "label": "C",
    "text": "head -c 20"
  }, {
    "label": "D",
    "text": "head -n 20"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、headコマンドでファイルの先頭20行を表示する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、head"],
  "answerTexts": ["head -n 20"],
  "answerHints": ["head -n"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 336,
  "source": "想定",
  "type": "single",
  "question": "次の中から、sedコマンドでファイル内のすべての\"old\"を\"new\"に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 'change old new' file"
  }, {
    "label": "B",
    "text": "sed 'old/new/all file"
  }, {
    "label": "C",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "D",
    "text": "sed replace/oldnew' file"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、sedコマンドでファイル内のすべての\"old\"を\"new\"に置換する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、sedコマンドでファイル内のすべての\""],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 364,
  "source": "想定",
  "type": "single",
  "question": "パイプ (|) の機能として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }, {
    "label": "B",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }, {
    "label": "C",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }, {
    "label": "D",
    "text": "2つのコマンドを並列に実行する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "パイプ (|) の機能として適切な説明",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パイプ (|) の機能として適切な"],
  "answerTexts": ["前のコマンドの標準出力を次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準出力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 420,
  "source": "想定",
  "type": "single",
  "question": "次の中から、sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 'replace/old/new' file"
  }, {
    "label": "B",
    "text": "sed 'old/new/a' file"
  }, {
    "label": "C",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "D",
    "text": "sed change old new file"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、sedコマンドでファイル内のすべての'old'を'new'に置換する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、sedコマンドでファイル内のすべての'"],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 432,
  "source": "想定",
  "type": "single",
  "question": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 'old/new/a' file"
  }, {
    "label": "B",
    "text": "sed 'change old new' file"
  }, {
    "label": "C",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "D",
    "text": "sed 'replace/old/new' file"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "sedコマンドでファイル内のすべての'old'を'new'に置換する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sedコマンドでファイル内のすべての'old'を'"],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 468,
  "source": "想定",
  "type": "single",
  "question": "次の中から、sortコマンドで数値順にソートするオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-k"
  }, {
    "label": "B",
    "text": "-n"
  }, {
    "label": "C",
    "text": "+"
  }, {
    "label": "D",
    "text": "-T"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、sortコマンドで数値順にソートするオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、sort"],
  "answerTexts": ["-n"],
  "answerHints": ["-n"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 474,
  "source": "想定",
  "type": "single",
  "question": "パイプ (|) の機能として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }, {
    "label": "B",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }, {
    "label": "C",
    "text": "2つのコマンドを並列に実行する"
  }, {
    "label": "D",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "パイプ (|) の機能として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パイプ (|) の機能として誤ってい"],
  "answerTexts": ["前のコマンドの標準エラーを次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準エ"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 489,
  "source": "想定",
  "type": "single",
  "question": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 'replace/old/new' file"
  }, {
    "label": "B",
    "text": "sed 'old/new/a' file"
  }, {
    "label": "C",
    "text": "sed change old new' file"
  }, {
    "label": "D",
    "text": "sed 's/old/new/d' file"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "sedコマンドでファイル内のすべての'old'を'new'に置換する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sedコマンドでファイル内のすべての'old'を'"],
  "answerTexts": ["sed 's/old/new/d' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 493,
  "source": "想定",
  "type": "single",
  "question": "awkコマンドでファイルの第2フィールドを表示する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "awk 'print $1' file"
  }, {
    "label": "B",
    "text": "awk 'field 2' file"
  }, {
    "label": "C",
    "text": "awk 'print $2' file"
  }, {
    "label": "D",
    "text": "awk 'column 2' file"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "awkコマンドでファイルの第2フィールドを表示する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["awk"],
  "answerTexts": ["awk 'print $2' file"],
  "answerHints": ["awk 'print $2"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100040,
  "source": "想定",
  "type": "single",
  "question": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか",
  "choices": [{
    "label": "A",
    "text": "find /home -name \".txt\""
  }, {
    "label": "B",
    "text": "find /home -type \".txt\""
  }, {
    "label": "C",
    "text": "find /home -search *.txt"
  }, {
    "label": "D",
    "text": "find /home -ext txt"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか"],
  "answerTexts": ["find /home -name \".txt\""],
  "answerHints": ["find /home -name"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100042,
  "source": "想定",
  "type": "single",
  "question": "次の中から、findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "find /home -type *.txt"
  }, {
    "label": "B",
    "text": "find /home -name \"*.txt\""
  }, {
    "label": "C",
    "text": "find /home -search \"*.txt\""
  }, {
    "label": "D",
    "text": "find /home -ext txt"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、find"],
  "answerTexts": ["find /home -name \"*.txt\""],
  "answerHints": ["find /home -name"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100043,
  "source": "想定",
  "type": "single",
  "question": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 'old/new/g' file"
  }, {
    "label": "B",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "C",
    "text": "sed 'replace/old/new' file"
  }, {
    "label": "D",
    "text": "sed 'change old new' file"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sedコマンドでファイル内のすべての'old'を'"],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 138,
  "source": "想定",
  "type": "single",
  "question": "次の中から、パイプ (|) の機能として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }, {
    "label": "B",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }, {
    "label": "C",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }, {
    "label": "D",
    "text": "2つのコマンドを並列に実行する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、パイプ (|) の機能として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、パイプ"],
  "answerTexts": ["前のコマンドの標準出力を次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準出力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 140,
  "source": "想定",
  "type": "single",
  "question": "標準エラー出力をファイルにリダイレクトする記述として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "command &> error.log"
  }, {
    "label": "B",
    "text": "command 2> error.log"
  }, {
    "label": "C",
    "text": "command 2>> error.log"
  }, {
    "label": "D",
    "text": "command 2>/dev/null error.log"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "標準エラー出力をファイルにリダイレクトする記述として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["標準エラー出力をファイルにリダイレクトする記述として誤ってい"],
  "answerTexts": ["command &> error.log"],
  "answerHints": ["command &"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 147,
  "source": "想定",
  "type": "single",
  "question": "次の中から、xargsコマンドの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "標準入力からの引数リストを使ってコマンドを実行する"
  }, {
    "label": "B",
    "text": "ファイルのパーミッションを変更する"
  }, {
    "label": "C",
    "text": "ファイルを圧縮する"
  }, {
    "label": "D",
    "text": "プロセスの優先度を変更する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、xargsコマンドの用途として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、xargs"],
  "answerTexts": ["標準入力からの引数リストを使ってコマンドを実行する"],
  "answerHints": ["標準入力からの"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 149,
  "source": "想定",
  "type": "single",
  "question": "次の中から、tarコマンドでgzip圧縮されたアーカイブを展開するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-jzf"
  }, {
    "label": "B",
    "text": "-xzf"
  }, {
    "label": "C",
    "text": "-czf"
  }, {
    "label": "D",
    "text": "-Cf"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、tarコマンドでgzip圧縮されたアーカイブを展開するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、tarコマンドでgzip圧縮されたアーカイブを展開するオプションはどれか。"],
  "answerTexts": ["-xzf"],
  "answerHints": ["-xzf"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 193,
  "source": "想定",
  "type": "single",
  "question": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "sed 'old/new/all' file"
  }, {
    "label": "B",
    "text": "sed 's/old/new/g' file"
  }, {
    "label": "C",
    "text": "sed 'change/old/new' file"
  }, {
    "label": "D",
    "text": "sed 'replace/old/new' file"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "sedコマンドでファイル内のすべての'old'を'new'に置換する正しい記述",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sedコマンドでファイル内のすべての'old'を'"],
  "answerTexts": ["sed 's/old/new/g' file"],
  "answerHints": ["sed 's"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 199,
  "source": "想定",
  "type": "single",
  "question": "teeコマンドの機能として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "ファイルの内容を2つに分割する"
  }, {
    "label": "B",
    "text": "ファイルの末尾を表示する"
  }, {
    "label": "C",
    "text": "標準入力をファイルと標準出力の両方に書き込む"
  }, {
    "label": "D",
    "text": "2つのファイルの差分を表示する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "teeコマンドの機能として適切な説明",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["teeコマンドの機能として適切な"],
  "answerTexts": ["標準入力をファイルと標準出力の両方に書き込む"],
  "answerHints": ["標準入力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 216,
  "source": "想定",
  "type": "single",
  "question": "パイプ (|) の機能として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "前のコマンドの標準エラーを次のコマンドの標準入力に渡す"
  }, {
    "label": "B",
    "text": "前のコマンドの終了コードを次のコマンドに渡す"
  }, {
    "label": "C",
    "text": "2つのコマンドを並列に実行する"
  }, {
    "label": "D",
    "text": "前のコマンドの標準出力を次のコマンドの標準入力に渡す"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "パイプ (|) の機能として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["パイプ (|) の機能として正しいも"],
  "answerTexts": ["前のコマンドの標準出力を次のコマンドの標準入力に渡す"],
  "answerHints": ["前のコマンドの標準出力を"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 268,
  "source": "想定",
  "type": "single",
  "question": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。",
  "choices": [{
    "label": "A",
    "text": "find /home -name \"*.txt\""
  }, {
    "label": "B",
    "text": "find /home -search \"*.txt\""
  }, {
    "label": "C",
    "text": "find /home -type \"txt\""
  }, {
    "label": "D",
    "text": "find /home -ext txt"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["findコマンドで/homeディレクトリ配下のすべての.txtファイルを検索する正しい記述はどれか。"],
  "answerTexts": ["find /home -name \"*.txt\""],
  "answerHints": ["find /home -name"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 276,
  "source": "想定",
  "type": "single",
  "question": "次の中から、grepコマンドで大文字小文字を区別せずに検索するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-i"
  }, {
    "label": "B",
    "text": "-v"
  }, {
    "label": "C",
    "text": "-l"
  }, {
    "label": "D",
    "text": "-c"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、grepコマンドで大文字小文字を区別せずに検索するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、grep"],
  "answerTexts": ["-i"],
  "answerHints": ["-i"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 298,
  "source": "想定",
  "type": "single",
  "question": "tarコマンドでgzip圧縮されたアーカイブを展開するオプションはどれか。",
  "choices": [{
    "label": "A",
    "text": "-czf"
  }, {
    "label": "B",
    "text": "-xzf"
  }, {
    "label": "C",
    "text": "-rzf"
  }, {
    "label": "D",
    "text": "-tzf"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "tarコマンドでgzip圧縮されたアーカイブを展開するオプション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["tar"],
  "answerTexts": ["-xzf"],
  "answerHints": ["-xzf"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 342,
  "source": "想定",
  "type": "single",
  "question": "次の中から、uniqコマンドの前提条件として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "入力ファイルがバイナリ形式である必要がある"
  }, {
    "label": "B",
    "text": "入力データが事前にソートされている必要がある"
  }, {
    "label": "C",
    "text": "root権限が必要である"
  }, {
    "label": "D",
    "text": "入力がパイプからである必要がある"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、uniqコマンドの前提条件として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、uniq"],
  "answerTexts": ["入力データが事前にソートされている必要がある"],
  "answerHints": ["入力データ"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 439,
  "source": "想定",
  "type": "single",
  "question": "uniqコマンドの前提条件として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "入力ファイルがバイナリ形式である必要がある"
  }, {
    "label": "B",
    "text": "入力データが事前にソートされている必要がある"
  }, {
    "label": "C",
    "text": "入力がパイプからである必要がある"
  }, {
    "label": "D",
    "text": "root権限が必要である"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "uniqコマンドの前提条件として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["uniqコマンドの前提条件として誤ってい"],
  "answerTexts": ["root権限が必要である"],
  "answerHints": ["root権限が必要で"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 446,
  "source": "想定",
  "type": "single",
  "question": "次の中から、xargsコマンドの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルを圧縮する"
  }, {
    "label": "B",
    "text": "ファイルのパーミッションを変更する"
  }, {
    "label": "C",
    "text": "標準入力からの引数リストを使ってコマンドを実行する"
  }, {
    "label": "D",
    "text": "プロセスの優先度を変更する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、xargsコマンドの用途として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、xargs"],
  "answerTexts": ["標準入力からの引数リストを使ってコマンドを実行する"],
  "answerHints": ["標準入力からの"],
  "chap": "第3章 GNUとUNIXコマンド"
}, {
  "id": 100044,
  "source": "想定",
  "type": "single",
  "question": "次の中から、dfコマンドの-hオプションの意味はどれか。",
  "choices": [{
    "label": "A",
    "text": "隠しファイルシステムも表示する"
  }, {
    "label": "B",
    "text": "ヘッダー行を非表示にする"
  }, {
    "label": "C",
    "text": "人間が読みやすい形式 (KB/MB/GB) で表示する"
  }, {
    "label": "D",
    "text": "ハードリンク数を表示する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、dfコマンドの-hオプションの意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、df"],
  "answerTexts": ["人間が読みやすい形式 (KB/MB/GB) で表示する"],
  "answerHints": ["人間が"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100045,
  "source": "想定",
  "type": "single",
  "question": "SUIDが設定されたファイルの動作として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "実行時にファイル所有者の権限で動作する"
  }, {
    "label": "B",
    "text": "ファイルのグループが変更される"
  }, {
    "label": "C",
    "text": "実行時にroot権限で動作する"
  }, {
    "label": "D",
    "text": "ファイルの削除が制限される"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "SUIDが設定されたファイルの動作",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["SUIDが設定されたファイルの動作として適切な"],
  "answerTexts": ["実行時にファイル所有者の権限で動作する"],
  "answerHints": ["実行時にファイル"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100046,
  "source": "想定",
  "type": "single",
  "question": "ファイルパーミッションで755の意味として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "所有者: rw-、グループ: rx、その他: Fx"
  }, {
    "label": "B",
    "text": "所有者: rwx、グループ: r-x、その他: r-x"
  }, {
    "label": "C",
    "text": "所有者: rwx、グループ: rw-、その他: r--"
  }, {
    "label": "D",
    "text": "所有者: rwx、グループ: rwx、その他: r-"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "ファイルパーミッションで755の意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ファイルパーミッションで755の意味として適切な"],
  "answerTexts": ["所有者: rwx、グループ: r-x、その他: r-x"],
  "answerHints": ["所有者: rwx、グループ: r-x"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100047,
  "source": "想定",
  "type": "single",
  "question": "LVMにおける正しい構成順序はどれか。",
  "choices": [{
    "label": "A",
    "text": "論理ボリューム(LV) → 物理ボリューム(PV) → ボリュームグループ(VG)"
  }, {
    "label": "B",
    "text": "論理ボリューム(LV) → ボリュームグループ(VG) → 物理ボリューム(PV)"
  }, {
    "label": "C",
    "text": "物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"
  }, {
    "label": "D",
    "text": "ボリュームグループ(VG) → 物理ボリューム(PV) → 論理ボリューム(LV)"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "LVMにおける正しい構成順序",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["LVM"],
  "answerTexts": ["物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"],
  "answerHints": ["物理"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 126,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ハードリンクとシンボリックリンクの違いとして正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ハードリンクはファイルシステムをまたげるが、シンボリックリンクはまたげない"
  }, {
    "label": "B",
    "text": "ハードリンクはディレクトリに対しても作成できる"
  }, {
    "label": "C",
    "text": "シンボリックリンクは同一のinode番号を共有する"
  }, {
    "label": "D",
    "text": "ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、ハードリンクとシンボリックリンクの違い",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ハードリンク"],
  "answerTexts": ["ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"],
  "answerHints": ["ハードリンクは同一"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 153,
  "source": "想定",
  "type": "single",
  "question": "ハードリンクとシンボリックリンクの違いとして正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "シンボリックリンクは同一のinode番号を共有する"
  }, {
    "label": "B",
    "text": "ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"
  }, {
    "label": "C",
    "text": "ハードリンクはディレクトリに対しても作成できる"
  }, {
    "label": "D",
    "text": "ハードリンクはファイルシステムをまたげるが、シンボリックリンクはまたげない"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "ハードリンクとシンボリックリンクの違い",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ハードリンクとシンボリックリンクの違いとして正しいも"],
  "answerTexts": ["ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"],
  "answerHints": ["ハードリンクは同一"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 167,
  "source": "想定",
  "type": "single",
  "question": "スティッキービットが設定されたディレクトリの動作として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "ディレクトリの読み取りが制限される"
  }, {
    "label": "B",
    "text": "すべてのユーザーがファイルを削除できる"
  }, {
    "label": "C",
    "text": "ファイルの書き込みが禁止される"
  }, {
    "label": "D",
    "text": "ファイルの所有者とrootのみがそのファイルを削除できる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "スティッキービットが設定されたディレクトリの動作",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["スティッキービットが設定されたディレクトリの動作として適切な"],
  "answerTexts": ["ファイルの所有者とrootのみがそのファイルを削除できる"],
  "answerHints": ["ファイルの所有者と"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 209,
  "source": "想定",
  "type": "single",
  "question": "次の中から、/etc/fstabファイルの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ユーザーのディスククォータを設定する"
  }, {
    "label": "B",
    "text": "ファイルシステムのフォーマット設定を行う"
  }, {
    "label": "C",
    "text": "パーティションの作成情報を記録する"
  }, {
    "label": "D",
    "text": "ブート時に自動マウントするファイルシステムを定義する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、/etc/fstabファイルの用途",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、/etc"],
  "answerTexts": ["ブート時に自動マウントするファイルシステムを定義する"],
  "answerHints": ["ブート"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 237,
  "source": "想定",
  "type": "single",
  "question": "ファイルパーミッションで755の意味として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "所有者: rwx、グループ: rx、その他: r-x"
  }, {
    "label": "B",
    "text": "所有者: rwx、グループ: rw-、 その他: r--"
  }, {
    "label": "C",
    "text": "所有者: rwx、グループ: rwx、その他:r-"
  }, {
    "label": "D",
    "text": "所有者: rw-、グループ: jr-x、その他: rrx"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ファイルパーミッションで755の意味として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ファイルパーミッションで755の意味として誤ってい"],
  "answerTexts": ["所有者: rwx、グループ: rwx、その他:r-"],
  "answerHints": ["所有者: rwx、グループ: rwx"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 247,
  "source": "想定",
  "type": "single",
  "question": "ファイルパーミッションで755の意味として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "所有者: rwx、グループ: rwx、その他: F-"
  }, {
    "label": "B",
    "text": "所有者: rwx、グループ: rw-、その他: r--"
  }, {
    "label": "C",
    "text": "所有者: rwx、グループ: r-x、その他: r-x"
  }, {
    "label": "D",
    "text": "所有者: rw-、グループ: r-x、その他: r-x"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ファイルパーミッションで755の意味として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ファイルパーミッションで755の意味として正しいも"],
  "answerTexts": ["所有者: rwx、グループ: r-x、その他: r-x"],
  "answerHints": ["所有者: rwx、グループ: r-x"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 280,
  "source": "想定",
  "type": "single",
  "question": "LVMにおける正しい構成順序はどれか。",
  "choices": [{
    "label": "A",
    "text": "物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"
  }, {
    "label": "B",
    "text": "論理ボリューム(LV) → ボリュームグループ(VG) → 物理ボリューム(PV)"
  }, {
    "label": "C",
    "text": "論理ボリューム(LV) → 物理ボリューム(PV) → ボリュームグループ(VG)"
  }, {
    "label": "D",
    "text": "ボリュームグループ(VG) → 物理ボリューム(PV) → 論理ボリューム(LV)"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "LVMにおける正しい構成順序",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["LVM"],
  "answerTexts": ["物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"],
  "answerHints": ["物理"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 322,
  "source": "想定",
  "type": "single",
  "question": "次の中から、XFSファイルシステムの特徴として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "最大ファイルサイズが4GBに制限される"
  }, {
    "label": "B",
    "text": "ジャーナリング機能を持たない"
  }, {
    "label": "C",
    "text": "ファイルシステムの縮小が容易にできる"
  }, {
    "label": "D",
    "text": "大容量ファイルやストリーミングIOに最適化されている"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、XFSファイルシステムの特徴",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、XFS"],
  "answerTexts": ["大容量ファイルやストリーミングIOに最適化されている"],
  "answerHints": ["大容量"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 349,
  "source": "想定",
  "type": "single",
  "question": "/etc/fstabファイルの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ユーザーのディスククォータを設定する"
  }, {
    "label": "B",
    "text": "ファイルシステムのフォーマット設定を行う"
  }, {
    "label": "C",
    "text": "ブート時に自動マウントするファイルシステムを定義する"
  }, {
    "label": "D",
    "text": "パーティションの作成情報を記録する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "/etc/fstabファイルの用途",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/etc/fstabファイルの用途として正しいも"],
  "answerTexts": ["ブート時に自動マウントするファイルシステムを定義する"],
  "answerHints": ["ブート"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 378,
  "source": "想定",
  "type": "single",
  "question": "ext4ファイルシステムの特徴として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ジャーナリング機能を持ち、最大16TBのファイルをサポートする"
  }, {
    "label": "B",
    "text": "ジャーナリング機能を持たない軽量ファイルシステムである"
  }, {
    "label": "C",
    "text": "ZFSベースのファイルシステムである"
  }, {
    "label": "D",
    "text": "Windowsでのみ使用できる"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "ext4ファイルシステムの特徴",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ext4ファイルシステムの特徴として正しいも"],
  "answerTexts": ["ジャーナリング機能を持ち、最大16TBのファイルをサポートする"],
  "answerHints": ["ジャーナリング機能を持ち"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 380,
  "source": "想定",
  "type": "single",
  "question": "dfコマンドの-hオプションの意味はどれか。",
  "choices": [{
    "label": "A",
    "text": "人間が読みやすい形式 (KB/MB/GB) で表示する"
  }, {
    "label": "B",
    "text": "隠しファイルシステムも表示する"
  }, {
    "label": "C",
    "text": "ヘッダー行を非表示にする"
  }, {
    "label": "D",
    "text": "ハードリンク数を表示する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "dfコマンドの-hオプションの意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["df"],
  "answerTexts": ["人間が読みやすい形式 (KB/MB/GB) で表示する"],
  "answerHints": ["人間が"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 429,
  "source": "想定",
  "type": "single",
  "question": "SUIDが設定されたファイルの動作として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルのグループが変更される"
  }, {
    "label": "B",
    "text": "実行時にファイル所有者の権限で動作する"
  }, {
    "label": "C",
    "text": "実行時にroot権限で動作する"
  }, {
    "label": "D",
    "text": "ファイルの削除が制限される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "SUIDが設定されたファイルの動作",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["SUIDが設定されたファイルの動作として正しいも"],
  "answerTexts": ["実行時にファイル所有者の権限で動作する"],
  "answerHints": ["実行時にファイル"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 496,
  "source": "想定",
  "type": "single",
  "question": "LVMにおける正しい構成順序はどれか。",
  "choices": [{
    "label": "A",
    "text": "論理ボリューム(LV) → ボリュームグループ(VG) → 物理ボリューム(PV)"
  }, {
    "label": "B",
    "text": "ボリュームグループ(VG) → 物理ボリューム(PV) → 論理ボリューム(LV)"
  }, {
    "label": "C",
    "text": "物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"
  }, {
    "label": "D",
    "text": "論理ボリューム(LV) → 物理ボリューム(PV) → ボリュームグループ(VG)"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "LVMにおける正しい構成順序",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["LVM"],
  "answerTexts": ["物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"],
  "answerHints": ["物理"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100048,
  "source": "想定",
  "type": "single",
  "question": "XFSファイルシステムの特徴として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "大容量ファイルやストリーミングI/Oに最適化されている"
  }, {
    "label": "B",
    "text": "最大ファイルサイズが4GBに制限される"
  }, {
    "label": "C",
    "text": "ファイルシステムの縮小が容易にできる"
  }, {
    "label": "D",
    "text": "ジャーナリング機能を持たない"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "XFSファイルシステムの特徴",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["XFSファイルシステムの特徴として適切な"],
  "answerTexts": ["大容量ファイルやストリーミングI/Oに最適化されている"],
  "answerHints": ["大容量"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100049,
  "source": "想定",
  "type": "single",
  "question": "LVMにおける正しい構成順序はどれか。",
  "choices": [{
    "label": "A",
    "text": "論理ボリューム(LV) → ボリュームグループ(VG) → 物理ボリューム(PV)"
  }, {
    "label": "B",
    "text": "物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"
  }, {
    "label": "C",
    "text": "ボリュームグループ(VG) → 物理ボリューム(PV) → 論理ボリューム(LV)"
  }, {
    "label": "D",
    "text": "論理ボリューム(LV) → 物理ボリューム(PV) → ボリュームグループ(VG)"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "LVMにおける正しい構成順序",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["LVM"],
  "answerTexts": ["物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"],
  "answerHints": ["物理"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100050,
  "source": "想定",
  "type": "single",
  "question": "ext4ファイルシステムの特徴として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ジャーナリング機能を持たない軽量ファイルシステムである"
  }, {
    "label": "B",
    "text": "ジャーナリング機能を持ち、最大16TBのファイルをサポートする"
  }, {
    "label": "C",
    "text": "ZFSベースのファイルシステムである"
  }, {
    "label": "D",
    "text": "Windowsでのみ使用できる"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "ext4ファイルシステムの特徴として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ext4ファイルシステムの特徴として誤ってい"],
  "answerTexts": ["ジャーナリング機能を持たない軽量ファイルシステムである"],
  "answerHints": ["ジャーナリング機能を"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100051,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ファイルパーミッションで755の意味として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "所有者: rwx、グループ: r-x、その他:r-x"
  }, {
    "label": "B",
    "text": "所有者: rwx、グループ: rw-、その他:F-"
  }, {
    "label": "C",
    "text": "所有者: rw-、グループ: rx、その他: rrx"
  }, {
    "label": "D",
    "text": "所有者: rwx、グループ: rwx、その他:r--"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、ファイルパーミッションで755の意味として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ファイルパーミッション"],
  "answerTexts": ["所有者: rwx、グループ: r-x、その他:r-x"],
  "answerHints": ["所有者: rwx、グループ: r-x"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100052,
  "source": "想定",
  "type": "single",
  "question": "/etc/fstabファイルの用途として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "ファイルシステムのフォーマット設定を行う"
  }, {
    "label": "B",
    "text": "ユーザーのディスククォータを設定する"
  }, {
    "label": "C",
    "text": "ブート時に自動マウントするファイルシステムを定義する"
  }, {
    "label": "D",
    "text": "パーティションの作成情報を記録する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "/etc/fstabファイルの用途として適切な説明",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/etc/fstabファイルの用途として適切な"],
  "answerTexts": ["ブート時に自動マウントするファイルシステムを定義する"],
  "answerHints": ["ブート"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100053,
  "source": "想定",
  "type": "single",
  "question": "次の中から、umask 022の場合、新規作成されるファイルのデフォルトパーミッションはどれか。",
  "choices": [{
    "label": "A",
    "text": "666 (rw-rw-rw-)"
  }, {
    "label": "B",
    "text": "755 (rwxr-xr-x)"
  }, {
    "label": "C",
    "text": "644 (rw-r--r--)"
  }, {
    "label": "D",
    "text": "600 (rw-------)"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "次の中から、umask 022の場合、新規作成されるファイルのデフォルトパーミッション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、umask"],
  "answerTexts": ["644 (rw-r--r--)"],
  "answerHints": ["644"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100054,
  "source": "想定",
  "type": "single",
  "question": "SUIDが設定されたファイルの動作として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの削除が制限される"
  }, {
    "label": "B",
    "text": "実行時にroot権限で動作する"
  }, {
    "label": "C",
    "text": "実行時にファイル所有者の権限で動作する"
  }, {
    "label": "D",
    "text": "ファイルのグループが変更される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "SUIDが設定されたファイルの動作として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["SUIDが設定されたファイルの動作として誤ってい"],
  "answerTexts": ["実行時にroot権限で動作する"],
  "answerHints": ["実行時にroot権限"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100055,
  "source": "想定",
  "type": "single",
  "question": "ファイルパーミッションで755の意味として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "所有者: rwx、グループ: rw-、その他: r--"
  }, {
    "label": "B",
    "text": "所有者: rwx、グループ: r-x、その他:r-x"
  }, {
    "label": "C",
    "text": "所有者: rwx、グループ: rwx、その他: r-"
  }, {
    "label": "D",
    "text": "所有者: rw-、グループ: rrx、その他:r-x"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "ファイルパーミッションで755の意味として適切な説明",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ファイルパーミッションで755の意味として適切な"],
  "answerTexts": ["所有者: rwx、グループ: r-x、その他:r-x"],
  "answerHints": ["所有者: rwx、グループ: r-x"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100056,
  "source": "想定",
  "type": "single",
  "question": "次の中から、/etc/fstabファイルの用途として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルシステムのフォーマット設定を行う"
  }, {
    "label": "B",
    "text": "パーティションの作成情報を記録する"
  }, {
    "label": "C",
    "text": "ユーザーのディスククォータを設定する"
  }, {
    "label": "D",
    "text": "ブート時に自動マウントするファイルシステムを定義する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、/etc/fstabファイルの用途として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、/etc"],
  "answerTexts": ["ブート時に自動マウントするファイルシステムを定義する"],
  "answerHints": ["ブート"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100057,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ext4ファイルシステムの特徴として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ジャーナリング機能を持ち、最大16TBのファイルをサポートする"
  }, {
    "label": "B",
    "text": "ZFSベースのファイルシステムである"
  }, {
    "label": "C",
    "text": "ジャーナリング機能を持たない軽量ファイルシステムである"
  }, {
    "label": "D",
    "text": "Windowsでのみ使用できる"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、ext4ファイルシステムの特徴として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ext4"],
  "answerTexts": ["ジャーナリング機能を持ち、最大16TBのファイルをサポートする"],
  "answerHints": ["ジャーナリング機能を持ち"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 122,
  "source": "想定",
  "type": "single",
  "question": "次の中から、SUIDが設定されたファイルの動作として正しいものはどれか",
  "choices": [{
    "label": "A",
    "text": "実行時にroot権限で動作する"
  }, {
    "label": "B",
    "text": "ファイルのグループが変更される"
  }, {
    "label": "C",
    "text": "ファイルの削除が制限される"
  }, {
    "label": "D",
    "text": "実行時にファイル所有者の権限で動作する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、SUIDが設定されたファイルの動作",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、SUID"],
  "answerTexts": ["実行時にファイル所有者の権限で動作する"],
  "answerHints": ["実行時にファイル"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 137,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ext4ファイルシステムの特徴として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ジャーナリング機能を持ち、最大16TBのファイルをサポートする"
  }, {
    "label": "B",
    "text": "ジャーナリング機能を持たない軽量ファイルシステムである"
  }, {
    "label": "C",
    "text": "Windowsでのみ使用できる"
  }, {
    "label": "D",
    "text": "ZFSベースのファイルシステムである"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、ext4ファイルシステムの特徴として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ext4"],
  "answerTexts": ["ジャーナリング機能を持ち、最大16TBのファイルをサポートする"],
  "answerHints": ["ジャーナリング機能を持ち"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 157,
  "source": "想定",
  "type": "single",
  "question": "/etc/fstabファイルの用途として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ユーザーのディスククォータを設定する"
  }, {
    "label": "B",
    "text": "ファイルシステムのフォーマット設定を行う"
  }, {
    "label": "C",
    "text": "パーティションの作成情報を記録する"
  }, {
    "label": "D",
    "text": "ブート時に自動マウントするファイルシステムを定義する"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "/etc/fstabファイルの用途として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/etc/fstabファイルの用途として誤ってい"],
  "answerTexts": ["ユーザーのディスククォータを設定する"],
  "answerHints": ["ユーザー"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 162,
  "source": "想定",
  "type": "single",
  "question": "次の中から、LVMにおける正しい構成順序はどれか。",
  "choices": [{
    "label": "A",
    "text": "論理ボリューム(LV) → 物理ボリューム(PV) → ボリュームグループ(VG)"
  }, {
    "label": "B",
    "text": "ボリュームグループ(VG) → 物理ボリューム(PV) → 論理ボリューム(LV)"
  }, {
    "label": "C",
    "text": "論理ボリューム(LV) → ボリュームグループ(VG) → 物理ボリューム(PV)"
  }, {
    "label": "D",
    "text": "物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、LVMにおける正しい構成順序",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、LVM"],
  "answerTexts": ["物理ボリューム(PV) → ボリュームグループ(VG) → 論理ボリューム(LV)"],
  "answerHints": ["物理"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 191,
  "source": "想定",
  "type": "single",
  "question": "スティッキービットが設定されたディレクトリの動作として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "ディレクトリの読み取りが制限される"
  }, {
    "label": "B",
    "text": "ファイルの書き込みが禁止される"
  }, {
    "label": "C",
    "text": "すべてのユーザーがファイルを削除できる"
  }, {
    "label": "D",
    "text": "ファイルの所有者とrootのみがそのファイルを削除できる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "スティッキービットが設定されたディレクトリの動作",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["スティッキービットが設定されたディレクトリの動作として適切な"],
  "answerTexts": ["ファイルの所有者とrootのみがそのファイルを削除できる"],
  "answerHints": ["ファイルの所有者と"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 232,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ハードリンクとシンボリックリンクの違いとして正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ハードリンクはディレクトリに対しても作成できる"
  }, {
    "label": "B",
    "text": "ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"
  }, {
    "label": "C",
    "text": "ハードリンクはファイルシステムをまたげるが、シンボリックリンクはまたげない"
  }, {
    "label": "D",
    "text": "シンボリックリンクは同一のinode番号を共有する"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "次の中から、ハードリンクとシンボリックリンクの違いとして正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ハードリンク"],
  "answerTexts": ["ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"],
  "answerHints": ["ハードリンクは同一"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 233,
  "source": "想定",
  "type": "single",
  "question": "XFSファイルシステムの特徴として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルシステムの縮小が容易にできる"
  }, {
    "label": "B",
    "text": "最大ファイルサイズが4GBに制限される"
  }, {
    "label": "C",
    "text": "大容量ファイルやストリーミングIOに最適化されている"
  }, {
    "label": "D",
    "text": "ジャーナリング機能を持たない"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "XFSファイルシステムの特徴として正しいもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["XFSファイルシステムの特徴として正しいも"],
  "answerTexts": ["大容量ファイルやストリーミングIOに最適化されている"],
  "answerHints": ["大容量"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 279,
  "source": "想定",
  "type": "single",
  "question": "/etc/fstabファイルの用途として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "パーティションの作成情報を記録する"
  }, {
    "label": "B",
    "text": "ファイルシステムのフォーマット設定を行う"
  }, {
    "label": "C",
    "text": "ユーザーのディスククォータを設定する"
  }, {
    "label": "D",
    "text": "ブート時に自動マウントするファイルシステムを定義する"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "/etc/fstabファイルの用途として誤っているもの",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["/etc/fstabファイルの用途として誤ってい"],
  "answerTexts": ["ユーザーのディスククォータを設定する"],
  "answerHints": ["ユーザー"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 313,
  "source": "想定",
  "type": "single",
  "question": "ext4ファイルシステムの特徴として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "Windowsでのみ使用できる"
  }, {
    "label": "B",
    "text": "ジャーナリング機能を持たない軽量ファイルシステムである"
  }, {
    "label": "C",
    "text": "ZFSベースのファイルシステムである"
  }, {
    "label": "D",
    "text": "ジャーナリング機能を持ち、最大16TBのファイルをサポートする"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "ext4ファイルシステムの特徴として適切な説明",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ext4ファイルシステムの特徴として適切な"],
  "answerTexts": ["ジャーナリング機能を持ち、最大16TBのファイルをサポートする"],
  "answerHints": ["ジャーナリング機能を持ち"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 357,
  "source": "想定",
  "type": "single",
  "question": "lsコマンドの-hオプションの意味はどれか。",
  "choices": [{
    "label": "A",
    "text": "隠しファイルシステムも表示する"
  }, {
    "label": "B",
    "text": "ハードリンク数を表示する"
  }, {
    "label": "C",
    "text": "人間が読みやすい形式 (KB/MB/GB) で表示する"
  }, {
    "label": "D",
    "text": "ヘッダー行を非表示にする"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "lsコマンドの-hオプションの意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["lsコマンド"],
  "answerTexts": ["人間が読みやすい形式 (KB/MB/GB) で表示する"],
  "answerHints": ["人間が"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 430,
  "source": "想定",
  "type": "single",
  "question": "次の中から、スティッキービットが設定されたディレクトリの動作として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの所有者とrootのみがそのファイルを削除できる"
  }, {
    "label": "B",
    "text": "すべてのユーザーがファイルを削除できる"
  }, {
    "label": "C",
    "text": "ディレクトリの読み取りが制限される"
  }, {
    "label": "D",
    "text": "ファイルの書き込みが禁止される"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "次の中から、スティッキービットが設定されたディレクトリの動作として正しい",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、スティッキービット"],
  "answerTexts": ["ファイルの所有者とrootのみがそのファイルを削除できる"],
  "answerHints": ["ファイルの所有者と"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 450,
  "source": "想定",
  "type": "single",
  "question": "スティッキービットが設定されたディレクトリの動作として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの所有者とrootのみがそのファイルを削除できる"
  }, {
    "label": "B",
    "text": "ディレクトリの読み取りが制限される"
  }, {
    "label": "C",
    "text": "すべてのユーザーがファイルを削除できる"
  }, {
    "label": "D",
    "text": "ファイルの書き込みが禁止される"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "スティッキービットが設定されたディレクトリの動作として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["スティッキービットが設定されたディレクトリの動作として誤ってい"],
  "answerTexts": ["ディレクトリの読み取りが制限される"],
  "answerHints": ["ディレクトリ"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 482,
  "source": "想定",
  "type": "single",
  "question": "sshd_configでrootのSSHログインを禁止する設定はどれか。",
  "choices": [{
    "label": "A",
    "text": "PermitRootLogin no"
  }, {
    "label": "B",
    "text": "DenyRoot yes"
  }, {
    "label": "C",
    "text": "AllowRoot false"
  }, {
    "label": "D",
    "text": "RootLogin disable"
  }],
  "answer": ["A"],
  "selectCount": 1,
  "identifyHint": "sshd_configでrootのSSHログインを禁止する設定",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["sshd_config"],
  "answerTexts": ["PermitRootLogin no"],
  "answerHints": ["PermitRootLogin"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100058,
  "source": "想定",
  "type": "single",
  "question": "次の中から、dfコマンドの-hオプションの意味はどれか。",
  "choices": [{
    "label": "A",
    "text": "ヘッダー行を非表示にする"
  }, {
    "label": "B",
    "text": "ハードリンク数を表示する"
  }, {
    "label": "C",
    "text": "隠しファイルシステムも表示する"
  }, {
    "label": "D",
    "text": "人間が読みやすい形式 (KB/MB/GB) で表示する"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、dfコマンドの-hオプションの意味",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、df"],
  "answerTexts": ["人間が読みやすい形式 (KB/MB/GB) で表示する"],
  "answerHints": ["人間が"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100060,
  "source": "想定",
  "type": "single",
  "question": "umask 022の場合、新規作成されるファイルのデフォルトパーミッションはどれか。",
  "choices": [{
    "label": "A",
    "text": "666 (rw-rw-rw-)"
  }, {
    "label": "B",
    "text": "755 (rwxr-xr-x)"
  }, {
    "label": "C",
    "text": "600 (rw-------)"
  }, {
    "label": "D",
    "text": "644 (rw-r--r--)"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "umask 022の場合、新規作成されるファイルのデフォルトパーミッション",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["umask"],
  "answerTexts": ["644 (rw-r--r--)"],
  "answerHints": ["644"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 100061,
  "source": "想定",
  "type": "single",
  "question": "次の中から、ハードリンクとシンボリックリンクの違いとして正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "シンボリックリンクは同一のinode番号を共有する"
  }, {
    "label": "B",
    "text": "ハードリンクはファイルシステムをまたげるが、シンボリックリンクはまたげない"
  }, {
    "label": "C",
    "text": "ハードリンクはディレクトリに対しても作成できる"
  }, {
    "label": "D",
    "text": "ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、ハードリンクとシンボリックリンクの違い",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、ハードリンク"],
  "answerTexts": ["ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"],
  "answerHints": ["ハードリンクは同一"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 183,
  "source": "想定",
  "type": "single",
  "question": "ext4ファイルシステムの特徴として適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "Windowsでのみ使用できる"
  }, {
    "label": "B",
    "text": "ジャーナリング機能を持たない軽量ファイルシステムである"
  }, {
    "label": "C",
    "text": "ジャーナリング機能を持ち、最大16TBのファイルをサポートする"
  }, {
    "label": "D",
    "text": "ZFSベースのファイルシステムである"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ext4ファイルシステムの特徴",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ext4ファイルシステムの特徴として適切な"],
  "answerTexts": ["ジャーナリング機能を持ち、最大16TBのファイルをサポートする"],
  "answerHints": ["ジャーナリング機能を持ち"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 185,
  "source": "想定",
  "type": "single",
  "question": "次の中から、スティッキービットが設定されたディレクトリの動作として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの書き込みが禁止される"
  }, {
    "label": "B",
    "text": "ディレクトリの読み取りが制限される"
  }, {
    "label": "C",
    "text": "すべてのユーザーがファイルを削除できる"
  }, {
    "label": "D",
    "text": "ファイルの所有者とrootのみがそのファイルを削除できる"
  }],
  "answer": ["D"],
  "selectCount": 1,
  "identifyHint": "次の中から、スティッキービットが設定されたディレクトリの動作",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["次の中から、スティッキービット"],
  "answerTexts": ["ファイルの所有者とrootのみがそのファイルを削除できる"],
  "answerHints": ["ファイルの所有者と"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 287,
  "source": "想定",
  "type": "single",
  "question": "ハードリンクとシンボリックリンクの違いとして適切な説明を1つ選びなさい。",
  "choices": [{
    "label": "A",
    "text": "シンボリックリンクは同一のinode番号を共有する"
  }, {
    "label": "B",
    "text": "ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"
  }, {
    "label": "C",
    "text": "ハードリンクはディレクトリに対しても作成できる"
  }, {
    "label": "D",
    "text": "ハードリンクはファイルシステムをまたげるが、シンボリックリンクはまたげない"
  }],
  "answer": ["B"],
  "selectCount": 1,
  "identifyHint": "ハードリンクとシンボリックリンクの違い",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ハードリンクとシンボリックリンクの違いとして適切な"],
  "answerTexts": ["ハードリンクは同一ファイルシステム内でのみ作成できるが、シンボリックリンクはファイルシステムをまたげる"],
  "answerHints": ["ハードリンクは同一"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 387,
  "source": "想定",
  "type": "single",
  "question": "スティッキービットが設定されたディレクトリの動作として正しいものはどれか。",
  "choices": [{
    "label": "A",
    "text": "ファイルの書き込みが禁止される"
  }, {
    "label": "B",
    "text": "ディレクトリの読み取りが制限される"
  }, {
    "label": "C",
    "text": "ファイルの所有者とrootのみがそのファイルを削除できる"
  }, {
    "label": "D",
    "text": "すべてのユーザーがファイルを削除できる"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "スティッキービットが設定されたディレクトリの動作",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["スティッキービットが設定されたディレクトリの動作として正しいも"],
  "answerTexts": ["ファイルの所有者とrootのみがそのファイルを削除できる"],
  "answerHints": ["ファイルの所有者と"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}, {
  "id": 460,
  "source": "想定",
  "type": "single",
  "question": "ファイルパーミッションで755の意味として誤っているものはどれか。",
  "choices": [{
    "label": "A",
    "text": "所有: rwx、グループ: rw-、その他:r-"
  }, {
    "label": "B",
    "text": "所有者: rw-、グループ: Fr-x、その他: rrx"
  }, {
    "label": "C",
    "text": "所有者: rwx、グループ: rwx、その他: r--"
  }, {
    "label": "D",
    "text": "所有者: rwx、グループ: Fx、その他: rx"
  }],
  "answer": ["C"],
  "selectCount": 1,
  "identifyHint": "ファイルパーミッションで755の意味として誤っている",
  "decisionKey": "",
  "mnemonic": "",
  "answerKeys": ["ファイルパーミッションで755の意味として誤ってい"],
  "answerTexts": ["所有者: rwx、グループ: rwx、その他: r--"],
  "answerHints": ["所有者: rwx、グ"],
  "chap": "第5章 デバイスとLinuxファイルシステム"
}];

// ════════════════════════════════════════════════════════════════
//  HACK × THE × LPIC
//  戦略(STRATEGY.md)を実装したアプリ。
//   核心: 選択肢本文を見せず「問題文→記号」を自力想起させ、反射化する。
//   ・active recall: 記号を言い切ってから採点（眺め禁止）
//   ・spaced repetition: Leitner 5段の箱。正解で昇格・誤答で箱1へ転落
//   ・頭を使わせない: 次に何を解くかはエンジンが選ぶ。判断は「記号は?」だけ
//   ・進捗の主役は「反射化した問題数(=実力)」。ストリークは脇役
//   ・進捗は localStorage 非依存。state 保持 + JSON 書き出し/読み込みで永続化
//  ※ QUESTIONS は本ファイル末尾に同梱（xlsx 全319問を変換したもの）
// ════════════════════════════════════════════════════════════════

const BOX_COUNT = 5; // Leitner の箱数
const GRADUATE_BOX = 5; // この箱に入ったら「反射化(卒業)」とみなす
// 箱ごとの出題優先度（小さいほど高頻度で出る）。箱1=毎回候補, 箱5=たまに確認
const BOX_WEIGHT = {
  1: 16,
  2: 8,
  3: 4,
  4: 2,
  5: 1
};
const SET_SIZE = 10; // 1セットの問題数（マイクロラーニング: 約2分）
const REVEAL_STEP_MARK = /[。．.？?！!、，,\n]/g;
const nowMs = () => typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
// 反射とみなす制限時間: 問題表示〜正解まで。長文は読む分だけ加算（上限9秒）。
const fastThresholdMs = q => Math.min(9000, 2500 + (q && q.question ? q.question.length : 0) * 120);

// ── 進捗の初期状態 ──
function initProgress(questions) {
  const p = {};
  for (const q of questions) p[q.id] = {
    box: 1,
    seen: 0,
    correct: 0,
    streak: 0
  };
  return p;
}

// ── 出題エンジン: 箱の重みで重み付き抽選。直近に出した問題は避ける ──
function pickQuestion(questions, progress, recentIds) {
  const pool = [];
  for (const q of questions) {
    const st = progress[q.id] || {
      box: 1
    };
    if (recentIds.includes(q.id)) continue; // 直近回避（偽手がかり/連続を防ぐ）
    const w = BOX_WEIGHT[st.box] || 1;
    for (let i = 0; i < w; i++) pool.push(q.id);
  }
  // 全部 recent に入っていたら recent を無視
  const source = pool.length ? pool : questions.map(q => q.id);
  const id = source[Math.floor(Math.random() * source.length)];
  return questions.find(q => q.id === id);
}

// ── 答え合わせ（記述式の正規化） ──
function normalize(s) {
  return (s || "").trim().toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xfee0)).replace(/\s+/g, "").replace(/\/+$/, "");
}
function judge(q, input) {
  if (q.type === "fill") return normalize(input) === normalize(q.answer[0]);
  if (q.type === "multi") {
    const a = [...q.answer].sort().join("");
    const b = [...input].sort().join("");
    return a === b;
  }
  return input[0] === q.answer[0];
}

// ════════════════════════════════════════════════════════════════
//  識別ロジック（このアプリの肝）
//  「開示した範囲だけで他の問題と区別できる地点まで自動で一気に開示する」
//  そのために全問題を事前解析し、各問題に
//   ・firstRevealLen : 第1段でここまで見せれば一意に識別できる文字数
//   ・ambiguous      : 全文見せても他と区別できない（=記号が割れる）問題か
//  を付与する。ambiguous な問題は「記号」ではなく「正解の中身」を選ばせる。
// ════════════════════════════════════════════════════════════════

// 識別判定用の正規化：枝詞・記号・空白・末尾ノイズを吸収
function normForIdentify(s) {
  let t = s || "";
  t = t.split(/クラ[ウド]資|LPIC-1:/)[0]; // 末尾に混入したページノイズを除去
  t = t.toLowerCase();
  // 共通の枕詞は識別に寄与しないので除去（先頭にあるもの）
  t = t.replace(/^(次の中から[、,]?|次のうち[、,]?|次の)/g, "");
  t = t.replace(/[\s、。，．.,]/g, "");
  return t;
}

// 全問題を一度だけ解析（モジュールロード時）
const ANALYSIS = (() => {
  const norms = QUESTIONS.map(q => normForIdentify(q.question));
  const out = QUESTIONS.map((q, idx) => {
    const me = norms[idx];
    // me を一意に識別できる最小prefix長（正規化文字列上）
    let uniqLen = me.length;
    let found = false;
    for (let L = 1; L <= me.length; L++) {
      const pre = me.slice(0, L);
      let clash = false;
      for (let j = 0; j < norms.length; j++) {
        if (j !== idx && norms[j].startsWith(pre)) {
          clash = true;
          break;
        }
      }
      if (!clash) {
        uniqLen = L;
        found = true;
        break;
      }
    }
    // found=false は「全文読んでも他と被る」= ambiguous
    return {
      uniqLen,
      ambiguous: !found,
      norm: me
    };
  });
  return out;
})();

// 正規化prefix長 → 元の問題文での開示文字数に変換し、文節境界まで伸ばす
function firstRevealCutInOriginal(q, uniqLenNorm) {
  const orig = q.question;
  // 元文を1文字ずつ正規化しながら、正規化長が uniqLenNorm に達する位置を探す
  let acc = 0;
  let pos = orig.length;
  for (let i = 1; i <= orig.length; i++) {
    const normed = normForIdentify(orig.slice(0, i));
    if (normed.length >= uniqLenNorm) {
      pos = i;
      break;
    }
  }
  // 文節境界（句読点・改行・スペース）まで前進して自然な切れ目に
  const tail = orig.slice(pos);
  const m = tail.match(/^[^。．\.？\?！\!、，,\n\s]*[。．\.？\?！\!、，,\n\s]?/);
  if (m) pos += m[0].length;
  return Math.min(pos, orig.length);
}

// ── 段階開示用セグメント ──
// 第1段 = 識別できる地点まで（自動で一気に開示）。以降は句読点で1段ずつ。
function segments(q, analysis) {
  const t = q.question;
  const a = analysis || {
    uniqLen: 0,
    ambiguous: false
  };
  const cuts = [];
  // 識別キーが手動指定されていれば優先
  if (q.identifyHint && t.includes(q.identifyHint)) {
    cuts.push(t.indexOf(q.identifyHint) + q.identifyHint.length);
  } else {
    // 自動：識別できる地点まで
    cuts.push(firstRevealCutInOriginal(q, a.uniqLen));
  }
  let m;
  REVEAL_STEP_MARK.lastIndex = 0;
  while (m = REVEAL_STEP_MARK.exec(t)) cuts.push(m.index + 1);
  cuts.push(t.length);
  // 第1段より手前の細かい区切りは捨てる（枝詞の途中で止めない）
  const first = cuts[0];
  const uniq = [...new Set(cuts.filter(x => x >= first))].sort((a, b) => a - b);
  const segs = [];
  let prev = 0;
  for (const e of uniq) {
    if (e > prev) {
      segs.push(t.slice(0, e));
      prev = e;
    }
  }
  return segs.length ? segs : [t];
}
function comboTier(c) {
  if (c >= 20) return {
    name: "BLAZE",
    glow: "#ff6b6b",
    soft: "#ffb3b3"
  };
  if (c >= 10) return {
    name: "FEVER",
    glow: "#ffb800",
    soft: "#ffe08a"
  };
  if (c >= 5) return {
    name: "HOT",
    glow: "#34d39e",
    soft: "#8ef0cf"
  };
  return {
    name: "",
    glow: "#5b9bff",
    soft: "#a7c6ff"
  };
}

// 問題文中の識別キー（複数）に下線を引く。keys が空/未指定なら素のテキスト。
function Highlight({
  text,
  keys,
  color,
  on,
  variant = "underline"
}) {
  if (!on || !keys || keys.length === 0) return /*#__PURE__*/React.createElement(React.Fragment, null, text);
  // 出現位置を集めて重複・重なりを除去
  const ranges = [];
  for (const k of keys) {
    if (!k) continue;
    let from = 0,
      idx;
    while ((idx = text.indexOf(k, from)) !== -1) {
      ranges.push([idx, idx + k.length]);
      from = idx + k.length;
    }
  }
  if (ranges.length === 0) return /*#__PURE__*/React.createElement(React.Fragment, null, text);
  ranges.sort((a, b) => a[0] - b[0]);
  // 重なりをマージ
  const merged = [ranges[0]];
  for (let i = 1; i < ranges.length; i++) {
    const last = merged[merged.length - 1];
    if (ranges[i][0] <= last[1]) last[1] = Math.max(last[1], ranges[i][1]);else merged.push(ranges[i]);
  }
  const parts = [];
  let pos = 0;
  merged.forEach(([s, e], i) => {
    if (s > pos) parts.push(/*#__PURE__*/React.createElement("span", {
      key: "n" + i
    }, text.slice(pos, s)));
    const hStyle = variant === "marker" ? {
      background: color,
      color: "#15140a",
      fontWeight: 800,
      borderRadius: 3,
      padding: "1px 3px",
      WebkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone"
    } : variant === "soft" ? {
      color,
      fontWeight: 700
    } // 下線なし・太字・色のみ（リンク誤認を避ける）
    : {
      color,
      borderBottom: `2px solid ${color}`,
      fontWeight: 800
    };
    parts.push(/*#__PURE__*/React.createElement("span", {
      key: "h" + i,
      style: hStyle
    }, text.slice(s, e)));
    pos = e;
  });
  if (pos < text.length) parts.push(/*#__PURE__*/React.createElement("span", {
    key: "tail"
  }, text.slice(pos)));
  return /*#__PURE__*/React.createElement(React.Fragment, null, parts);
}

// ════════════════════════════════════════════════════════════════
//  学習モデル: 章(第N章)単位で「覚える→テスト」を反復。
//   ・覚える: 1ページ10問のリスト。答えは隠し、ホバー/タップで表示（赤シート式）。
//   ・テスト: 同じ章の問題をまるごと出題。速度や箱は無し。とにかく覚えるテスト。
//   ・バッジ: テスト正答率90%以上でその章に🏅（localStorageで永続化）。
// ════════════════════════════════════════════════════════════════
const PAGE_SIZE = 10; // 覚える画面の1ページ表示数
const PASS_PCT = 90; // バッジ獲得ライン（正答率%）
// 総合テスト（模試）: 全範囲から EXAM_SIZE 問。EXAM_PASS 以上で合格＝修了バッジ(銀)、EXAM_GOLD 以上で金バッジ。
const EXAM_SIZE = 60; // 出題数
const EXAM_PASS = 42; // 合格ライン（7割）
const EXAM_GOLD = 50; // 金バッジライン（豪華演出）
const EXAM_SLOTS = 5; // 修了バッジのコレクション枠
const RANDOM_BLOCK_N = 20; // ランダム演習（復習用）: 選んだブロックからランダム出題する固定数
// 8ブロックの問数（章順フラット319問を先頭から区切る）。奇数=イベント50 / 偶数=自習30,29。
const BLOCK_SIZES = [50, 30, 50, 30, 50, 30, 50, 29];

// 章ラベル("第N章 タイトル")から章番号を取り出す（フラット配列の章順ソートに使用）
const chapNo = c => {
  const m = /第\s*([0-9]+)\s*章/.exec(c || "");
  return m ? +m[1] : null;
}; // 章番号

// 配列をシャッフルして新配列を返す（Fisher–Yates・非破壊）。ランダム出題で使用。
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 答えをぼかして隠し、ホバー/タップで見せる
function HideAnswer({
  children
}) {
  const [shown, setShown] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: () => setShown(s => !s),
    className: "hideans" + (shown ? " shown" : "")
  }, children);
}

// 覚える画面の1問カード。
//  ・問題文をクリック → 全選択肢を展開（正解の「見分けポイント」に下線）。
//    「下線だけ見れば、他の選択肢の中から答えを選べる」を自分で確認するため。
//  ・答えはホバー/タップで表示（赤シート式）。
function StudyCard({
  q,
  mono,
  flagged,
  onToggleFlag
}) {
  const [showChoices, setShowChoices] = useState(true); // 暗記のテンポ優先：最初から正解の選択肢を開いておく（折りたたみも可）
  const ansSet = new Set(q.answer);
  const texts = q.answerTexts && q.answerTexts.length ? q.answerTexts : q.answer;
  const hintFor = label => {
    const k = q.answer.indexOf(label);
    return k >= 0 && q.answerHints && q.answerHints[k] ? [q.answerHints[k]] : [];
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#181f2a",
      border: `1px solid ${flagged ? "#f6c24766" : "#2a3543"}`,
      borderRadius: 12,
      padding: "14px 16px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      opacity: 0.4,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "#", q.id, "\u30FB", q.source), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#5b9bff",
      opacity: 0.8
    }
  }, showChoices ? "▲ 閉じる" : q.type === "fill" ? "▼ クリックで答え" : "▼ クリックで選択肢")), /*#__PURE__*/React.createElement("div", {
    onClick: () => setShowChoices(s => !s),
    style: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.75,
      whiteSpace: "pre-wrap",
      cursor: "pointer",
      letterSpacing: 0.2
    }
  }, /*#__PURE__*/React.createElement(Highlight, {
    text: q.question,
    keys: q.answerKeys,
    color: "#5cc8f5",
    on: true,
    variant: "soft"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleFlag,
    "aria-pressed": !!flagged,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      width: "100%",
      marginTop: 10,
      padding: "9px 0",
      borderRadius: 10,
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 800,
      transition: "background .15s, border-color .15s, box-shadow .15s",
      background: flagged ? "linear-gradient(90deg,#e0a830,#f6c247)" : "#141b26",
      border: `1.5px solid ${flagged ? "#f6c247" : "#3a4658"}`,
      color: flagged ? "#241a05" : "#c2cad8",
      boxShadow: flagged ? "0 0 14px #f6c24755" : "none"
    }
  }, flagged ? "🔖 要復習に登録中（押して解除）" : "🔖 要復習に追加する"), showChoices && (q.type !== "fill" ? /*#__PURE__*/React.createElement("div", {
    className: "card-in",
    style: {
      marginTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, q.choices.map(c => {
    const correct = ansSet.has(c.label);
    return /*#__PURE__*/React.createElement("div", {
      key: c.label,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "baseline",
        padding: "7px 11px",
        borderRadius: 9,
        background: correct ? "#13241f" : "transparent",
        border: `1px solid ${correct ? "#34d39e55" : "#232d3b"}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: correct ? "#34d39e" : "#555",
        minWidth: 14,
        textAlign: "center",
        fontWeight: 800
      }
    }, c.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontFamily: mono,
        lineHeight: 1.5,
        color: correct ? "#eceff4" : "#8b97a8"
      }
    }, correct ? /*#__PURE__*/React.createElement(Highlight, {
      text: c.text,
      keys: hintFor(c.label),
      color: "#f6c247",
      on: true,
      variant: "marker"
    }) : c.text));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "card-in",
    style: {
      marginTop: 10,
      padding: "9px 12px",
      borderRadius: 9,
      background: "#13241f",
      border: "1px solid #34d39e55"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "#34d39e",
      marginRight: 8
    }
  }, "\u7B54\u3048"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      fontFamily: mono,
      color: "#eceff4"
    }
  }, texts.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, i > 0 ? "　/　" : "", /*#__PURE__*/React.createElement(Highlight, {
    text: t,
    keys: q.answerHints && q.answerHints[i] ? [q.answerHints[i]] : [],
    color: "#f6c247",
    on: true,
    variant: "marker"
  })))))));
}
function App() {
  const questions = QUESTIONS;
  // 8ブロック化: まず章番号で安定ソートした「章順フラット配列(319問)」を作り、
  // 先頭から BLOCK_SIZES で区切って8ブロックにする。章内順(模試→想定)は元データ順を維持。
  //   sections[i] = ブロックiの問題配列 / sectionLabels[i] = "ブロックN"
  //   blocks[i]   = { no, kind(イベント/自習), size, chapSpan, chunkCount }
  const {
    sections,
    sectionLabels,
    blocks
  } = useMemo(() => {
    // 章番号順の安定グルーピング → フラット化
    const map = new Map();
    for (const q of questions) {
      const c = q.chap || "その他";
      if (!map.has(c)) map.set(c, []);
      map.get(c).push(q);
    }
    const chapLabels = [...map.keys()].sort((a, b) => (chapNo(a) ?? 999) - (chapNo(b) ?? 999) || a.localeCompare(b));
    const flat = chapLabels.flatMap(c => map.get(c)); // 319問・章順フラット

    // 固定サイズで8分割（合計319）。合計がデータ数とズレても端数は最後のブロックに寄せる。
    const secs = [];
    let pos = 0;
    for (let i = 0; i < BLOCK_SIZES.length; i++) {
      const size = i === BLOCK_SIZES.length - 1 ? flat.length - pos : BLOCK_SIZES[i];
      secs.push(flat.slice(pos, pos + size));
      pos += size;
    }
    const labels = secs.map((_, i) => `ブロック${i + 1}`);
    const blks = secs.map((qs, i) => {
      const nos = qs.map(q => chapNo(q.chap)).filter(n => n != null);
      const lo = Math.min(...nos),
        hi = Math.max(...nos);
      const chapSpan = nos.length === 0 ? "" : lo === hi ? `第${lo}章` : `第${lo}〜${hi}章`;
      return {
        no: i + 1,
        kind: i % 2 === 0 ? "イベント" : "自習",
        // 奇数ブロック(①③⑤⑦)=イベント / 偶数=自習
        size: qs.length,
        chapSpan,
        chunkCount: Math.max(1, Math.ceil(qs.length / PAGE_SIZE))
      };
    });
    return {
      sections: secs,
      sectionLabels: labels,
      blocks: blks
    };
  }, [questions]);
  const [screen, setScreen] = useState("home"); // home | testpick | study | test | result
  const [secIdx, setSecIdx] = useState(0);
  const [pickedSec, setPickedSec] = useState(null); // ホームのグリッドで開いているブロック（null=未選択）
  const [pickChunks, setPickChunks] = useState(() => new Set()); // testpick で選択中のチャンクindex集合

  // バッジ/最高スコア（localStorageで永続化）。8ブロック化で index 体系が変わるため新キーに移行。
  const [records, setRecords] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("reflex-records-blk") || "{}");
    } catch {
      return {};
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("reflex-records-blk", JSON.stringify(records));
    } catch (e) {}
  }, [records]);

  // 総合テスト（模試）の修了バッジ。"silver"(42〜49) / "gold"(50〜) を最大 EXAM_SLOTS 枠まで貯める。localStorageで永続化。
  const [examSlots, setExamSlots] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem("reflex-exam") || "[]");
      return Array.isArray(v) ? v.slice(0, EXAM_SLOTS) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("reflex-exam", JSON.stringify(examSlots));
    } catch (e) {}
  }, [examSlots]);

  // 間違えた問題（id→true）。テストで誤答→追加、正解→除去。localStorageで永続化。
  const [wrongIds, setWrongIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("reflex-wrong") || "{}");
    } catch {
      return {};
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("reflex-wrong", JSON.stringify(wrongIds));
    } catch (e) {}
  }, [wrongIds]);

  // 要復習フラグ（id→true）。正解・不正解に関係なくユーザーが手動でON/OFF。自動では外れない・localStorageで永続化。
  const [flaggedIds, setFlaggedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("reflex-flagged") || "{}");
    } catch {
      return {};
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("reflex-flagged", JSON.stringify(flaggedIds));
    } catch (e) {}
  }, [flaggedIds]);
  function toggleFlag(id) {
    setFlaggedIds(f => {
      const n = {
        ...f
      };
      if (n[id]) delete n[id];else n[id] = true;
      return n;
    });
  }

  // 暗記モード: 10問ずつ「覚える→テスト」を繰り返す
  const [studyChunk, setStudyChunk] = useState(0); // 現在の10問セット
  const [studySub, setStudySub] = useState("learn"); // learn | quizdone
  const [quizScore, setQuizScore] = useState(null); // 暗記内テストの点 {correct,total}
  // セットごとの学習状態（localStorageで永続化）。studyProgress[secIdx][chunk] = 一発正解できなかった問題ID配列。
  //   undefined=未挑戦 / []=全問一発正解(完了) / [id,...]=ミスが残っている
  const [studyProgress, setStudyProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("reflex-study-blk") || "{}");
    } catch {
      return {};
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("reflex-study-blk", JSON.stringify(studyProgress));
    } catch (e) {}
  }, [studyProgress]);

  // テスト/クイズ共通ランナー状態
  const [testQueue, setTestQueue] = useState([]); // 出題中の問題配列
  const [testMode, setTestMode] = useState("section"); // section(章・バッジ) | study(10・暗記)
  const [testPos, setTestPos] = useState(0);
  const [testResults, setTestResults] = useState([]); // [{id, ok}]
  const [phase, setPhase] = useState("answer"); // answer | reveal
  const [multiSel, setMultiSel] = useState([]);
  const [fillVal, setFillVal] = useState("");
  const [cursor, setCursor] = useState(0); // PC操作：矢印でハイライト中の選択肢index
  const [lastOk, setLastOk] = useState(null);
  const [lastInput, setLastInput] = useState(null); // 直近のユーザー回答（選択肢の印用）
  const [lastScore, setLastScore] = useState(null); // セクション結果画面用
  const [retry, setRetry] = useState(false); // 暗記10問テストで同じ問題をやり直し中（採点には影響させない）
  const [fullBlock, setFullBlock] = useState(true); // 直近のsectionテストがブロック全問か（🏅バッジ判定用）

  // ランダム出題モード
  const [randomLabel, setRandomLabel] = useState(""); // 実行中のスコープ表示名（"総合" or "ブロックN"）
  const [lastRandom, setLastRandom] = useState(null); // 再実行用 {scopeIdx, count}

  const secQuestions = sections[secIdx] || [];
  const chunkCount = Math.max(1, Math.ceil(secQuestions.length / PAGE_SIZE));
  const chunkQs = secQuestions.slice(studyChunk * PAGE_SIZE, studyChunk * PAGE_SIZE + PAGE_SIZE);
  const badgeCount = Object.values(records).filter(r => r && r.badge).length;
  const wrongList = questions.filter(q => wrongIds[q.id]); // 間違えた問題
  const flaggedList = questions.filter(q => flaggedIds[q.id]); // 要復習フラグを付けた問題（手動で外すまで残る）

  // ── 覚える進捗（セット単位） ──
  const blockChunks = i => Math.max(1, Math.ceil((sections[i] || []).length / PAGE_SIZE)); // そのブロックのセット数
  const setDoneCount = i => {
    // 全問一発正解でクリアしたセット数
    const p = studyProgress[i] || {};
    let n = 0;
    for (let k = 0; k < blockChunks(i); k++) {
      const m = p[k];
      if (m && m.length === 0) n++;
    }
    return n;
  };
  const setDots = i => {
    // 各セットの状態ドット（● 完了 / ◐ ミス残り / ○ 未着手）
    const p = studyProgress[i] || {};
    return Array.from({
      length: blockChunks(i)
    }, (_, k) => {
      const m = p[k];
      const done = m && m.length === 0,
        partial = m && m.length > 0;
      const color = done ? "#34d39e" : partial ? "#f6c247" : "#5b6878";
      return /*#__PURE__*/React.createElement("span", {
        key: k,
        "aria-hidden": "true",
        style: {
          fontSize: 14,
          lineHeight: 1,
          color
        }
      }, done ? "●" : partial ? "◐" : "○");
    });
  };

  // ── 総合テストの修了バッジ表示 ──
  const examGoldCount = examSlots.filter(s => s === "gold").length;
  const examComplete = examSlots.length >= EXAM_SLOTS; // 5枠コンプ
  const examMastered = examComplete && examGoldCount >= EXAM_SLOTS; // 全枠金＝完全制覇
  // 5枠のコレクション帯（🥇金 / 🏅銀 / 空）。size でアイコンの大きさを変える。
  const examStrip = (size = 26) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 6
    }
  }, Array.from({
    length: EXAM_SLOTS
  }, (_, k) => {
    const t = examSlots[k];
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      "aria-hidden": "true",
      style: {
        width: size + 8,
        height: size + 8,
        borderRadius: 9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size,
        background: t === "gold" ? "#2a220e" : t === "silver" ? "#182430" : "#141b26",
        border: `1px solid ${t === "gold" ? "#e0a83088" : t === "silver" ? "#34d39e55" : "#232d3b"}`
      }
    }, t === "gold" ? "🥇" : t === "silver" ? "🏅" : "");
  }));

  // ── スタイル（暗記特化: 落ち着いた濃紺、最小限のグロー） ──
  const wrap = {
    minHeight: "100vh",
    boxSizing: "border-box",
    background: "radial-gradient(110% 60% at 50% 0%, #182238, transparent 62%), linear-gradient(180deg,#11161f,#0d1117)",
    color: "#eceff4",
    fontFamily: "system-ui, -apple-system, 'Hiragino Sans', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 16px",
    overflowX: "hidden"
  };
  const mono = "ui-monospace, 'SF Mono', Menlo, monospace";

  // ── 操作 ──
  function openStudy(i) {
    setSecIdx(i);
    setStudyChunk(0);
    setStudySub("learn");
    setScreen("study");
  }
  function beginRun(queue, mode) {
    setTestQueue(queue);
    setTestMode(mode);
    setTestPos(0);
    setTestResults([]);
    setPhase("answer");
    setMultiSel([]);
    setFillVal("");
    setLastOk(null);
    setRetry(false);
    setScreen("test");
  }
  // チャンク選択テスト画面を開く（初期は全チャンク選択）
  function openTestPick(i) {
    setSecIdx(i);
    const n = Math.max(1, Math.ceil((sections[i] || []).length / PAGE_SIZE));
    setPickChunks(new Set(Array.from({
      length: n
    }, (_, k) => k)));
    setScreen("testpick");
  }
  function startTest(i) {
    setSecIdx(i);
    setFullBlock(true);
    beginRun(sections[i] || [], "section");
  } // ブロック全問・🏅
  // testpick で選んだチャンクの問題をフラット順に連結して出題。全チャンク選択のときだけ🏅対象。
  function startPickTest() {
    const all = sections[secIdx] || [];
    const n = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
    const idxs = [...pickChunks].sort((a, b) => a - b);
    const queue = idxs.flatMap(c => all.slice(c * PAGE_SIZE, c * PAGE_SIZE + PAGE_SIZE));
    if (queue.length === 0) return;
    setFullBlock(pickChunks.size === n);
    beginRun(queue, "section");
  }
  function startChunkQuiz() {
    beginRun(chunkQs, "study");
  } // この10問
  function startChunkMisses() {
    // この回で一発正解できなかった問題だけ
    const ids = new Set((studyProgress[secIdx] || {})[studyChunk] || []);
    beginRun(chunkQs.filter(q => ids.has(q.id)), "study");
  }
  function startReview() {
    beginRun(wrongList.slice(), "review");
  } // 間違えた問題に挑戦
  // 要復習フラグを付けた問題に挑戦（正解するまで繰り返す・フラグは正解しても外れない＝ユーザーが手動で外すまで残る）
  function startFlagged() {
    if (flaggedList.length) beginRun(shuffle(flaggedList), "flagged");
  }

  // ── ランダム出題 ──
  const poolOf = scope => scope >= 0 ? sections[scope] || [] : questions; // 0〜7=ブロック
  // ランダム演習（復習用）: ブロックを選ぶだけの画面。ブロックをタップ＝RANDOM_BLOCK_N 問で即開始。
  function openBlockRandom() {
    setScreen("randompick");
  }
  function startRandom(scopeIdx, count) {
    const pool = poolOf(scopeIdx);
    const queue = shuffle(pool).slice(0, Math.min(count, pool.length));
    if (queue.length === 0) return;
    setRandomLabel(scopeIdx >= 0 ? sectionLabels[scopeIdx] : "総合");
    setLastRandom({
      scopeIdx,
      count
    });
    setFullBlock(false); // 🏅対象外（純粋な演習）
    beginRun(queue, "random");
  }
  // 直近ランダム演習で間違えた問題だけを再出題（結果はまた random 扱いなので連鎖する）。
  function startRandomMisses(missed) {
    if (missed && missed.length) beginRun(shuffle(missed), "random");
  }

  // ── 総合テスト（模試）: 全範囲から EXAM_SIZE 問をランダム出題 ──
  function startExam() {
    const queue = shuffle(questions).slice(0, Math.min(EXAM_SIZE, questions.length));
    if (queue.length === 0) return;
    setFullBlock(false);
    beginRun(queue, "exam");
  }
  // 総合テストの間違えた問題を、正解するまで繰り返す覚えるモードで再出題（結果はまた exammiss 扱いなので連鎖する）。
  function startExamMisses(missed) {
    if (missed && missed.length) beginRun(shuffle(missed), "exammiss");
  }
  function submitAnswer(input) {
    const q = testQueue[testPos];
    if (!q || phase !== "answer") return;
    const ok = judge(q, input);
    setLastOk(ok);
    setLastInput(input);
    // やり直し中（暗記10問テスト）は採点・復習プールに反映しない＝最初の不正解のまま。
    if (!retry) {
      setTestResults(r => [...r, {
        id: q.id,
        ok
      }]);
      // 誤答は復習プールへ。正解したら除外（どのテストでも共通）。
      setWrongIds(w => {
        const n = {
          ...w
        };
        if (ok) delete n[q.id];else n[q.id] = true;
        return n;
      });
    }
    setPhase("reveal");
  }
  // 暗記10問テストで同じ問題を解き直す（採点は最初の結果のまま）。
  function retryQuestion() {
    setPhase("answer");
    setMultiSel([]);
    setFillVal("");
    setLastOk(null);
    setRetry(true);
  }
  // 「正解するまで繰り返す」覚えるモード挙動を使うモード（暗記10問／ランダム演習／総合テストの覚え直し／要復習）。
  const isCram = m => m === "study" || m === "random" || m === "exammiss" || m === "flagged";
  function nextTest() {
    const next = testPos + 1;
    if (next >= testQueue.length) {
      const correct = testResults.filter(r => r.ok).length; // 直近回答まで反映済み
      const total = testQueue.length;
      const pct = Math.round(correct / total * 100);
      if (testMode === "section") {
        const pass = pct >= PASS_PCT; // このテスト単体の合否（部分選択でも表示する）
        const badge = fullBlock && pass; // 🏅ブロック合格は「全チャンク選択で合格」のときだけ
        // 成績(best/badge)は全ブロックテストのときだけ永続化。部分選択は記録しない。
        if (fullBlock) {
          setRecords(rec => {
            const prev = rec[secIdx] || {
              best: 0,
              badge: false
            };
            return {
              ...rec,
              [secIdx]: {
                best: Math.max(prev.best, pct),
                badge: prev.badge || badge
              }
            };
          });
        }
        setLastScore({
          correct,
          total,
          pct,
          badge,
          pass,
          full: fullBlock
        });
        setScreen("result");
      } else if (testMode === "exam") {
        // 総合テスト（模試）: 合否＋修了バッジ
        const pass = correct >= EXAM_PASS;
        const gold = correct >= EXAM_GOLD;
        const tier = gold ? "gold" : "silver";
        if (pass) {
          // 空き枠があれば埋める。満杯かつ金なら銀を1つ金に格上げ（＝全枠金＝完全制覇へ）。
          setExamSlots(prev => {
            const slots = prev.slice(0, EXAM_SLOTS);
            if (slots.length < EXAM_SLOTS) slots.push(tier);else if (gold) {
              const i = slots.indexOf("silver");
              if (i >= 0) slots[i] = "gold";
            }
            return slots;
          });
        }
        // 総合テストで間違えた問題を lastScore に持たせ、「間違えた問題を覚える」導線に使う。
        const examMissedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const examMissed = testQueue.filter(q => examMissedIds.has(q.id));
        setLastScore({
          correct,
          total,
          pct,
          exam: true,
          pass,
          gold,
          tier: pass ? tier : null,
          missed: examMissed
        });
        setScreen("result");
      } else if (testMode === "exammiss") {
        // 総合テストの覚え直し: 正解するまで繰り返した後、まだ残るミスを返す
        const missedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const missed = testQueue.filter(q => missedIds.has(q.id));
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          exammiss: true,
          missed
        });
        setScreen("result");
      } else if (testMode === "flagged") {
        // 要復習フラグの挑戦: バッジ無し、フラグは正解しても外れない（結果画面は現在のフラグ数を見る）
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          flagged: true
        });
        setScreen("result");
      } else if (testMode === "review") {
        // 間違えた問題の復習: バッジ無し、結果画面へ
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          review: true
        });
        setScreen("result");
      } else if (testMode === "random") {
        // ランダム演習: バッジ無し、結果画面へ
        // この回で間違えた問題を lastScore に持たせ、「この演習のミスに挑戦」導線に使う。
        const missedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const missed = testQueue.filter(q => missedIds.has(q.id));
        setLastScore({
          correct,
          total,
          pct,
          badge: false,
          random: true,
          label: randomLabel,
          missed
        });
        setScreen("result");
      } else {
        // 暗記内テスト: 採点して暗記画面へ戻る
        setQuizScore({
          correct,
          total
        });
        // このセットで一発正解できなかった問題IDを永続化（retry分は testResults に載らないので「最初の回答」で判定）。
        // 出題キュー内の誤答のみを残す。ミス挑戦時はキュー＝前回のミスなので、正解できたものが自動的に外れて完了(=[])に近づく。
        const missedIds = new Set(testResults.filter(r => !r.ok).map(r => r.id));
        const stillMissedIds = testQueue.filter(q => missedIds.has(q.id)).map(q => q.id);
        setStudyProgress(prev => {
          const sec = {
            ...(prev[secIdx] || {})
          };
          sec[studyChunk] = stillMissedIds;
          return {
            ...prev,
            [secIdx]: sec
          };
        });
        setStudySub("quizdone");
        setScreen("study");
      }
      return;
    }
    setTestPos(next);
    setPhase("answer");
    setMultiSel([]);
    setFillVal("");
    setLastOk(null);
    setRetry(false);
  }

  // 問題が変わったらハイライト位置を先頭に戻す
  useEffect(() => {
    setCursor(0);
  }, [testPos, screen]);

  // キーボード（テスト）: 矢印↑↓で選択肢を移動→Enterで決定。single=A〜E/1〜5即決も併用、multi=Spaceで選択。reveal=Enterで次へ
  useEffect(() => {
    if (screen !== "test") return;
    const q = testQueue[testPos];
    const h = e => {
      if (e.repeat) return; // キーリピート（押しっぱなし）での連続発火を無視＝記述入力のEnterでreveal画面を飛ばさない
      if (phase === "reveal") {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          // 覚えるモード系（暗記10問／ランダム演習／総合の覚え直し）で不正解なら Enter はやり直し（次へは出さない）。それ以外は次へ。
          if (isCram(testMode) && !lastOk) retryQuestion();else nextTest();
        }
        return;
      }
      if (!q) return;
      // 矢印で選択肢ハイライトを移動（single / multi 共通）。↑←=上/↓→=下。
      // multi は選択肢の次に「決定」ボタンも移動先に含める（最後の位置＝決定ボタン）。
      if ((q.type === "single" || q.type === "multi") && q.choices.length) {
        const maxIdx = q.type === "multi" ? q.choices.length : q.choices.length - 1;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          setCursor(c => Math.min(c + 1, maxIdx));
          return;
        }
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          setCursor(c => Math.max(c - 1, 0));
          return;
        }
      }
      if (q.type === "single") {
        if (e.key === "Enter") {
          e.preventDefault();
          const c = q.choices[cursor];
          if (c) submitAnswer([c.label]);
          return;
        }
        // A〜E / 1〜5 の即決も従来どおり使える
        const map = {
          a: "A",
          b: "B",
          c: "C",
          d: "D",
          e: "E",
          "1": "A",
          "2": "B",
          "3": "C",
          "4": "D",
          "5": "E"
        };
        const lab = map[e.key.toLowerCase()];
        if (lab && q.choices.some(c => c.label === lab)) submitAnswer([lab]);
      } else if (q.type === "multi") {
        // カーソルが選択肢の位置ならEnterでON/OFF、決定ボタンの位置（=choices.length）ならEnterで決定（マウスクリックと同じ効果）。
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (cursor >= q.choices.length) {
            if (multiSel.length) submitAnswer(multiSel);
            return;
          }
          const c = q.choices[cursor];
          if (!c) return;
          setMultiSel(s => s.includes(c.label) ? s.filter(x => x !== c.label) : [...s, c.label]);
          return;
        }
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  // メニュー系画面（test以外＝ホーム/結果/ランダム選択/テスト選択/暗記など）: ↑↓で画面内のボタンを巡回フォーカス、Enterは標準でそのボタンを実行。
  useEffect(() => {
    if (screen === "test") return; // テスト画面は独自のキーボード操作を持つ
    const getBtns = () => Array.from(document.querySelectorAll("button")).filter(b => !b.disabled && b.offsetParent !== null);
    // 初期フォーカス: 意味のあるラベル（3文字以上）を持つ最初のボタン＝主要アクションに寄せる（← 等のアイコンボタンは初期選択から外す。矢印では行ける）
    const btns = getBtns();
    if (btns.length && !btns.includes(document.activeElement)) {
      (btns.find(b => (b.textContent || "").trim().length >= 3) || btns[0]).focus();
    }
    const h = e => {
      const tag = document.activeElement && document.activeElement.tagName || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return; // 入力欄では矢印を奪わない
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(e.key)) return;
      const list = getBtns();
      if (!list.length) return;
      e.preventDefault();
      const idx = list.indexOf(document.activeElement);
      const down = e.key === "ArrowDown" || e.key === "ArrowRight";
      const n = idx < 0 ? 0 : down ? Math.min(idx + 1, list.length - 1) : Math.max(idx - 1, 0);
      list[n].focus();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [screen]);
  const styleTag = /*#__PURE__*/React.createElement("style", null, `
      .hideans{ filter: blur(6px); cursor: pointer; transition: filter .12s; border-radius: 5px; }
      .hideans:hover, .hideans.shown{ filter: none; }
      .row:hover{ border-color:#3a4658 !important; }
      .secrow:hover{ background:#1a2230 !important; }
      .secrow:active{ background:#1c2534 !important; }
      .panel-in{ animation: panelin .2s ease; }
      @keyframes panelin{ from{ opacity:0; transform:translateY(-6px) } to{ opacity:1; transform:none } }
      .iconbtn:hover{ border-color:#3a4658 !important; color:#eceff4 !important; background:#222b38 !important; }
      .secbtn:hover{ filter: brightness(1.18); }
      .secbtn:active{ transform: scale(.97); }
      .choice:hover{ border-color:#5b9bff !important; }
      .choice:active{ transform: scale(.99); }
      .card-in{ animation: fadein .25s ease; }
      /* opacity は 0 にしない（不正解→次へ で shake と animation を奪い合い fadein が再発火し、カードが一瞬消える＝白フラッシュになるため）。スライドのみ。 */
      @keyframes fadein{ from{transform:translateY(4px)} to{transform:none} }
      @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(6px)}}
      .shake{ animation: shake .3s; }
      button:focus-visible,input:focus-visible{ outline:2px solid #8ef0cf; outline-offset:2px; }
      @media (prefers-reduced-motion: reduce){ *{animation:none !important} }
    `);

  // ════════════════ HOME（ブロック一覧） ════════════════
  if (screen === "home") {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 480,
        width: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 20,
        fontWeight: 900,
        letterSpacing: 2,
        margin: 0,
        whiteSpace: "nowrap",
        background: "linear-gradient(90deg,#5b9bff,#34d39e)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }
    }, "HACK \xD7 THE \xD7 LPIC"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 2,
        color: "#5b7088"
      }
    }, "LPIC 101\u5BFE\u7B56\u554F\u984C")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        padding: "5px 12px",
        borderRadius: 999,
        background: "#161d28",
        border: "1px solid #252f3d",
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: 2,
        color: "#5b7088"
      }
    }, "BADGE"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: badgeCount > 0 ? "#34d39e" : "#c2cad8"
      }
    }, badgeCount, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#5b6878",
        fontWeight: 700
      }
    }, " / ", sections.length)))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 20px",
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#8794a6"
      }
    }, "\u554F\u984C\u3092\u8AAD\u3093\u3067\u3001\u53CD\u5C04\u7684\u306B\u6B63\u89E3\u306E\u9078\u629E\u80A2\u3092\u9078\u3079\u308B\u3088\u3046\u306B\u3059\u308B\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3067\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u5404\u30D6\u30ED\u30C3\u30AF\u306E\u30C6\u30B9\u30C8\u30679\u5272\u3092\u53D6\u308B\u3068\u30D0\u30C3\u30B8\u3092\u7372\u5F97\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#c2cad8",
        fontWeight: 700
      }
    }, "\u51688\u500B\u306E\u30D0\u30C3\u30B8\u3092\u96C6\u3081\u305F\u3089\u3001\u6E96\u5099\u5B8C\u4E86\uFF01")), flaggedList.length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: startFlagged,
      className: "secbtn",
      style: {
        width: "100%",
        marginBottom: 14,
        padding: "11px 0",
        borderRadius: 10,
        fontSize: 13.5,
        fontWeight: 800,
        cursor: "pointer",
        background: "#241f10",
        border: "1px solid #6a5a2a",
        color: "#f6c247"
      }
    }, "\uD83D\uDD16 \u8981\u5FA9\u7FD2\u306B\u6311\u6226\uFF08", flaggedList.length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, sections.map((sec, i) => {
      const rec = records[i] || {
        best: 0,
        badge: false
      };
      const picked = pickedSec === i;
      const blk = blocks[i] || {
        no: i + 1,
        kind: "",
        chapSpan: ""
      };
      const isEvent = blk.kind === "イベント";
      const tagColor = isEvent ? "#9ec3ff" : "#5ee0b4"; // イベント=青 / 自習=緑
      const tagBg = isEvent ? "#16233a" : "#132720";
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: "#161d28",
          border: `1px solid ${picked ? "#3f6aa8" : rec.badge ? "#34d39e33" : "#232d3b"}`,
          borderRadius: 13,
          overflow: "hidden",
          transition: "border-color .15s"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => setPickedSec(picked ? null : i),
        className: "secrow",
        "aria-expanded": picked,
        "aria-label": `${sectionLabels[i]}・${blk.kind}${rec.badge ? "・達成" : rec.best > 0 ? `・${rec.best}%` : "・未挑戦"}`,
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 14px",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "inherit",
          textAlign: "left"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 28,
          height: 28,
          flex: "0 0 auto",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: rec.badge ? 16 : 14,
          fontWeight: 800,
          background: rec.badge ? "#15291f" : "#1b2330",
          border: `1px solid ${rec.badge ? "#34d39e55" : "#2a3543"}`,
          color: rec.badge ? "#34d39e" : "#9aa6b6"
        }
      }, rec.badge ? "🏅" : blk.no), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontSize: 15,
          fontWeight: 800
        }
      }, sectionLabels[i], /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: 0.5,
          color: tagColor,
          background: tagBg,
          border: `1px solid ${tagColor}44`,
          borderRadius: 6,
          padding: "1px 6px"
        }
      }, blk.kind)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 600,
          color: "#5b6878"
        }
      }, blk.chapSpan, " \u30FB ", sec.length, "\u554F")), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          whiteSpace: "nowrap",
          color: rec.badge ? "#34d39e" : rec.best > 0 ? "#f6c247" : "#5b6878"
        }
      }, rec.badge ? "🏅" : rec.best > 0 ? `${rec.best}%` : "未挑戦"), /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: "0 0 auto",
          color: "#5b6878",
          fontSize: 12,
          transition: "transform .18s",
          transform: picked ? "rotate(180deg)" : "none"
        }
      }, "\u25BE")), picked && /*#__PURE__*/React.createElement("div", {
        className: "panel-in",
        style: {
          display: "flex",
          gap: 10,
          padding: "0 14px 13px"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => openStudy(i),
        className: "secbtn",
        style: {
          flex: 1,
          padding: "10px 0",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 800,
          cursor: "pointer",
          background: "#13241f",
          border: "1px solid #2f6f5c",
          color: "#5ee0b4"
        }
      }, "\u899A\u3048\u308B"), /*#__PURE__*/React.createElement("button", {
        onClick: () => openTestPick(i),
        className: "secbtn",
        style: {
          flex: 1,
          padding: "10px 0",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 800,
          cursor: "pointer",
          background: "#1a2740",
          border: "1px solid #3f6aa8",
          color: "#9ec3ff"
        }
      }, "\u30C6\u30B9\u30C8")));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        padding: "14px 16px",
        borderRadius: 13,
        background: "#141b26",
        border: "1px solid #232d3b"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 900
      }
    }, "\uD83C\uDFB2 \u30E9\u30F3\u30C0\u30E0\u6F14\u7FD2"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 0.5,
        color: "#9ec3ff",
        background: "#16233a",
        border: "1px solid #9ec3ff44",
        borderRadius: 6,
        padding: "1px 6px"
      }
    }, "\u5FA9\u7FD2")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        fontWeight: 600,
        color: "#8794a6",
        marginBottom: 11
      }
    }, "\u5FD8\u308C\u304B\u3051\u305F\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3093\u3067\u30E9\u30F3\u30C0\u30E0", RANDOM_BLOCK_N, "\u554F\u3002\u8A18\u61B6\u306E\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u306B\u3002"), /*#__PURE__*/React.createElement("button", {
      onClick: openBlockRandom,
      className: "secbtn",
      style: {
        width: "100%",
        padding: "11px 0",
        borderRadius: 10,
        fontSize: 13.5,
        fontWeight: 800,
        cursor: "pointer",
        background: "#1a2740",
        border: "1px solid #3f6aa8",
        color: "#9ec3ff"
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3093\u3067\u5FA9\u7FD2\uFF08", RANDOM_BLOCK_N, "\u554F\uFF09")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        padding: "16px 16px 15px",
        borderRadius: 14,
        background: "linear-gradient(180deg,#16231d,#131b26)",
        border: `1px solid ${examMastered ? "#e0a83088" : examComplete ? "#34d39e55" : "#2f6f5c"}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 900,
        color: "#5ee0b4"
      }
    }, "\uD83C\uDFAF \u7DCF\u5408\u30C6\u30B9\u30C8\uFF08\u6A21\u8A66\uFF09"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 0.5,
        color: "#f6c247",
        background: "#2a220e",
        border: "1px solid #e0a83055",
        borderRadius: 6,
        padding: "1px 6px"
      }
    }, "\u4ED5\u4E0A\u3052\u30FB\u672C\u756A\u5F62\u5F0F")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        fontWeight: 600,
        color: "#8794a6",
        marginBottom: 12
      }
    }, "\u5168\u7BC4\u56F2\u304B\u3089", EXAM_SIZE, "\u554F\u30E9\u30F3\u30C0\u30E0\u51FA\u984C\u30FB", EXAM_PASS, "\u554F\uFF087\u5272\uFF09\u3067\u5408\u683C\uFF1D\u4FEE\u4E86\u30D0\u30C3\u30B8\uD83C\uDFC5\uFF0F", EXAM_GOLD, "\u554F\u4EE5\u4E0A\u3067\u91D1\uD83E\uDD47"), examStrip(26), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontSize: 11.5,
        fontWeight: 700,
        marginTop: 8,
        color: examMastered ? "#f6c247" : examComplete ? "#34d39e" : "#8794a6"
      }
    }, examMastered ? "🎉 完全制覇！" : `修了バッジ ${examSlots.length} / ${EXAM_SLOTS}`), /*#__PURE__*/React.createElement("button", {
      onClick: startExam,
      style: {
        width: "100%",
        marginTop: 13,
        padding: "13px 0",
        borderRadius: 11,
        fontSize: 15,
        fontWeight: 900,
        cursor: "pointer",
        color: "#10141c",
        background: "linear-gradient(90deg,#5ee0b4,#34d39e)",
        border: "none",
        boxShadow: "0 0 20px #34d39e33"
      }
    }, "\uD83C\uDFAF \u6A21\u8A66\u306B\u6311\u6226\uFF08", Math.min(EXAM_SIZE, questions.length), "\u554F\uFF09")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        justifyContent: "center",
        marginTop: 14,
        paddingBottom: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (confirm("バッジ・成績をすべてリセットします（修了バッジも含む）。よろしいですか？")) {
          setRecords({});
          setExamSlots([]);
        }
      },
      style: {
        ...linkBtn,
        color: "#ff8a8a"
      }
    }, "\u6210\u7E3E\u3092\u30EA\u30BB\u30C3\u30C8"))));
  }

  // ════════════════ TESTPICK（テスト範囲をチャンク単位で選ぶ） ════════════════
  if (screen === "testpick") {
    const blk = blocks[secIdx] || {
      no: secIdx + 1,
      kind: "",
      chapSpan: ""
    };
    // 各チャンクの問数（最後のチャンクは端数）
    const chunkSizes = Array.from({
      length: chunkCount
    }, (_, i) => Math.min(PAGE_SIZE, secQuestions.length - i * PAGE_SIZE));
    const selectedCount = [...pickChunks].reduce((s, c) => s + (chunkSizes[c] || 0), 0);
    const allSelected = pickChunks.size === chunkCount;
    const toggleChunk = c => setPickChunks(prev => {
      const n = new Set(prev);
      if (n.has(c)) n.delete(c);else n.add(c);
      return n;
    });
    const toggleAll = () => setPickChunks(allSelected ? new Set() : new Set(Array.from({
      length: chunkCount
    }, (_, k) => k)));
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 480,
        width: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      "aria-label": "\u30DB\u30FC\u30E0\u3078\u623B\u308B",
      className: "iconbtn",
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#1b2330",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        cursor: "pointer",
        fontSize: 17,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\u2190"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 1.15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 900,
        letterSpacing: 0.5
      }
    }, sectionLabels[secIdx], " \u30C6\u30B9\u30C8"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: "#5b7088"
      }
    }, blk.kind, " \u30FB ", blk.chapSpan)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "18px 0 12px",
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#8794a6"
      }
    }, "\u51FA\u984C\u3059\u308B\u7BC4\u56F2\u309210\u554F\u305A\u3064\u9078\u3079\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9ec3ff",
        fontWeight: 700
      }
    }, "\u5168\u90E8\u3092\u9078\u3093\u30679\u5272\u5408\u683C\u3059\u308B\u3068\u3001\u3053\u306E\u30D6\u30ED\u30C3\u30AF\u5408\u683C\uD83C\uDFC5"), "\u306B\u306A\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("button", {
      onClick: toggleAll,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        marginBottom: 8,
        borderRadius: 11,
        cursor: "pointer",
        background: "#141b26",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        fontSize: 13,
        fontWeight: 800,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 6,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 900,
        background: allSelected ? "#1a2740" : "transparent",
        border: `1px solid ${allSelected ? "#5b9bff" : "#3a4658"}`,
        color: "#9ec3ff"
      }
    }, allSelected ? "✓" : ""), allSelected ? "すべて解除" : "すべて選択"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, Array.from({
      length: chunkCount
    }).map((_, i) => {
      const on = pickChunks.has(i);
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => toggleChunk(i),
        "aria-pressed": on,
        "aria-label": `ブロック${blk.no}-${i + 1}（${chunkSizes[i]}問）${on ? "・選択中" : ""}`,
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 14px",
          borderRadius: 12,
          cursor: "pointer",
          textAlign: "left",
          background: on ? "#16233a" : "#161d28",
          border: `1px solid ${on ? "#3f6aa8" : "#232d3b"}`,
          color: "inherit",
          transition: "border-color .12s, background .12s"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          flex: "0 0 auto",
          borderRadius: 6,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 900,
          background: on ? "#1a2740" : "transparent",
          border: `1px solid ${on ? "#5b9bff" : "#3a4658"}`,
          color: "#9ec3ff"
        }
      }, on ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontSize: 15,
          fontWeight: 800
        }
      }, blk.no, "-", i + 1, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 600,
          color: "#5b6878",
          marginLeft: 8
        }
      }, chunkSizes[i], "\u554F")));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8794a6",
        marginBottom: 10
      }
    }, "\u51FA\u984C\u6570 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 900,
        color: selectedCount > 0 ? "#eceff4" : "#5b6878"
      }
    }, selectedCount), " \u554F", allSelected ? "（ブロック全問）" : ""), /*#__PURE__*/React.createElement("button", {
      onClick: startPickTest,
      disabled: selectedCount === 0,
      style: {
        ...primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)"),
        width: "100%",
        opacity: selectedCount === 0 ? 0.4 : 1,
        cursor: selectedCount === 0 ? "not-allowed" : "pointer"
      }
    }, "\u26A1 \u30C6\u30B9\u30C8\u958B\u59CB\uFF08", selectedCount, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      style: {
        ...linkBtn,
        marginTop: 16
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u4E00\u89A7\u3078"))));
  }

  // ════════════════ RANDOMPICK（ランダム演習＝復習用: ブロックを選ぶ） ════════════════
  if (screen === "randompick") {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 480,
        width: "100%",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      "aria-label": "\u30DB\u30FC\u30E0\u3078\u623B\u308B",
      className: "iconbtn",
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#1b2330",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        cursor: "pointer",
        fontSize: 17,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\u2190"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 900,
        letterSpacing: 0.5
      }
    }, "\uD83C\uDFB2 \u30E9\u30F3\u30C0\u30E0\u6F14\u7FD2\uFF08\u5FA9\u7FD2\uFF09"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "18px 0 12px",
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#8794a6"
      }
    }, "\u5FD8\u308C\u304B\u3051\u305F\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076\u3068\u3001\u305D\u306E\u4E2D\u304B\u3089", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9ec3ff",
        fontWeight: 700
      }
    }, "\u30E9\u30F3\u30C0\u30E0", RANDOM_BLOCK_N, "\u554F"), "\u3092\u30B7\u30E3\u30C3\u30D5\u30EB\u3057\u3066\u51FA\u984C\u3057\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u30D0\u30C3\u30B8\u5224\u5B9A\u306F\u306A\u3057\u30FB\u8A18\u61B6\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u7528\u3067\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 2,
        color: "#5b7088",
        margin: "6px 0 10px"
      }
    }, "\u5FA9\u7FD2\u3059\u308B\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, sections.map((sec, i) => {
      const blk = blocks[i] || {
        no: i + 1,
        kind: ""
      };
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => startRandom(i, RANDOM_BLOCK_N),
        className: "secbtn",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "13px 14px",
          borderRadius: 12,
          cursor: "pointer",
          background: "#141b26",
          border: "1px solid #2a3543",
          color: "#eceff4",
          textAlign: "left",
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 28,
          height: 28,
          flex: "0 0 auto",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 800,
          background: "#1a2740",
          border: "1px solid #3f6aa8",
          color: "#9ec3ff"
        }
      }, blk.no), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0,
          fontSize: 14.5,
          fontWeight: 800
        }
      }, sectionLabels[i]), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11.5,
          fontWeight: 800,
          color: "#5ee0b4",
          whiteSpace: "nowrap"
        }
      }, "\uD83C\uDFB2 ", Math.min(RANDOM_BLOCK_N, sec.length), "\u554F"));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        margin: "18px 0 10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "#232d3b"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 1.5,
        color: "#5b7088",
        whiteSpace: "nowrap"
      }
    }, "\u307E\u305F\u306F"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "#232d3b"
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => startRandom(-1, RANDOM_BLOCK_N),
      className: "secbtn",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "15px 16px",
        borderRadius: 12,
        cursor: "pointer",
        background: "linear-gradient(180deg,#27406b,#1d3052)",
        border: "1px solid #3f6aa8",
        color: "#eceff4",
        textAlign: "left",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, "\uD83C\uDF10"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 900
      }
    }, "\u5168\u4F53\u304B\u3089\u30E9\u30F3\u30C0\u30E0"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        opacity: 0.75,
        marginTop: 1
      }
    }, "\u5168\u30D6\u30ED\u30C3\u30AF\u6A2A\u65AD")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 800,
        color: "#f6c247",
        whiteSpace: "nowrap"
      }
    }, "\uD83C\uDFB2 ", RANDOM_BLOCK_N, "\u554F")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      style: {
        ...linkBtn,
        display: "block",
        margin: "20px auto 0"
      }
    }, "\u30DB\u30FC\u30E0\u3078")));
  }

  // ════════════════ STUDY（暗記: 10覚える→10テスト の繰り返し） ════════════════
  if (screen === "study") {
    // 暗記内テストの結果
    if (studySub === "quizdone") {
      const s = quizScore || {
        correct: 0,
        total: 0
      };
      const isLast = studyChunk + 1 >= chunkCount;
      const perfect = s.total > 0 && s.correct === s.total;
      const misses = (studyProgress[secIdx] || {})[studyChunk] || []; // この回で一発正解できなかった問題ID
      const remaining = chunkCount - (studyChunk + 1); // このブロックで残っているセット数
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 30
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, sectionLabels[secIdx], " \u30FB \u30BB\u30C3\u30C8 ", studyChunk + 1, " / ", chunkCount), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 54,
          fontWeight: 900,
          margin: "10px 0 0",
          color: perfect ? "#8ef0cf" : "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          opacity: 0.6,
          marginTop: 2
        }
      }, perfect ? "全問正解 ✓" : "正解"), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 20,
          padding: "12px 14px",
          borderRadius: 12,
          background: "#141b26",
          border: "1px solid #232d3b"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          fontWeight: 800,
          color: "#c2cad8"
        }
      }, sectionLabels[secIdx], "\uFF1A", /*#__PURE__*/React.createElement("span", {
        style: {
          color: "#34d39e"
        }
      }, setDoneCount(secIdx)), " / ", chunkCount, " \u30BB\u30C3\u30C8\u5B8C\u4E86"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          gap: 6,
          marginTop: 8
        }
      }, setDots(secIdx))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 22
        }
      }, misses.length > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: startChunkMisses,
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\uD83D\uDD01 \u30DF\u30B9\u306B\u6311\u6226\uFF08", misses.length, "\u554F\uFF09"), !isLast ?
      /*#__PURE__*/
      /* 前進導線は常に目立つ primary。残りセット数を明示して“終わった誤解”を防ぐ */
      React.createElement("button", {
        onClick: () => {
          setStudyChunk(c => c + 1);
          setStudySub("learn");
        },
        style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
      }, "\u6B21\u306E\u30BB\u30C3\u30C8\u3078\uFF08\u6B8B\u308A", remaining, "\uFF09\u2192") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          fontWeight: 800,
          color: "#8ef0cf",
          marginTop: 2
        }
      }, "\uD83C\uDF89 \u6700\u5F8C\u306E\u30BB\u30C3\u30C8\uFF01\u4ED5\u4E0A\u3052\u306B\u30D6\u30ED\u30C3\u30AF\u30C6\u30B9\u30C8\u3067\u529B\u8A66\u3057"), /*#__PURE__*/React.createElement("button", {
        onClick: () => startTest(secIdx),
        style: primaryBtn("linear-gradient(90deg,#34d39e,#8ef0cf)")
      }, "\u26A1 \u30D6\u30ED\u30C3\u30AF\u30C6\u30B9\u30C8\uFF08", secQuestions.length, "\u554F\uFF09")), /*#__PURE__*/React.createElement("button", {
        onClick: () => setStudySub("learn"),
        style: ghostBtn
      }, "\u899A\u3048\u308B\u753B\u9762\u306B\u623B\u308B"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: {
          ...linkBtn,
          marginTop: 6
        }
      }, "\u30D6\u30ED\u30C3\u30AF\u4E00\u89A7\u3078"))));
    }
    // learn: 現在の10問を覚える
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        width: "100%",
        paddingBottom: 92
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      "aria-label": "\u30DB\u30FC\u30E0\u3078\u623B\u308B",
      className: "iconbtn",
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "#1b2330",
        border: "1px solid #2a3543",
        color: "#c2cad8",
        cursor: "pointer",
        fontSize: 17,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\u2190"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 1.1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: 3,
        color: "#5b7088"
      }
    }, "BLOCK"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17,
        fontWeight: 900,
        letterSpacing: 0.5
      }
    }, (blocks[secIdx] || {}).no ?? secIdx + 1)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: "#c2cad8"
      }
    }, "\u899A\u3048\u308B \u30FB \u30BB\u30C3\u30C8 ", studyChunk + 1, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#5b6878",
        fontWeight: 700
      }
    }, "/ ", chunkCount)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: "#5b7088"
      }
    }, "\u5B8C\u4E86 ", setDoneCount(secIdx), " / ", chunkCount)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 999,
        background: "#1b2330",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${Math.round(setDoneCount(secIdx) / chunkCount * 100)}%`,
        background: "linear-gradient(90deg,#34d39e,#8ef0cf)",
        borderRadius: 999,
        transition: "width .25s"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 4,
        padding: 4,
        marginTop: 14,
        marginBottom: 4,
        background: "#141b26",
        border: "1px solid #232d3b",
        borderRadius: 999
      }
    }, Array.from({
      length: chunkCount
    }).map((_, i) => {
      const cur = i === studyChunk;
      const m = (studyProgress[secIdx] || {})[i]; // undefined=未挑戦 / []=完了 / [..]=ミス残り
      const done = m && m.length === 0; // 全問正解で学習完了
      const partial = m && m.length > 0; // 挑戦したがミスが残っている
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => {
          setStudyChunk(i);
          setStudySub("learn");
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          minWidth: 54,
          padding: "7px 14px",
          fontSize: 14,
          fontWeight: 800,
          borderRadius: 999,
          cursor: "pointer",
          border: "none",
          color: cur ? "#0e1420" : done ? "#34d39e" : partial ? "#f6c247" : "#8b97a8",
          background: cur ? "linear-gradient(90deg,#5b9bff,#7fb6ff)" : "transparent",
          boxShadow: cur ? "0 2px 10px #5b9bff55" : "none",
          transition: "background .15s, color .15s"
        }
      }, secIdx + 1, "-", i + 1, done && /*#__PURE__*/React.createElement("span", {
        "aria-label": "\u5B66\u7FD2\u5B8C\u4E86",
        style: {
          fontSize: 13,
          fontWeight: 900,
          color: cur ? "#0e1420" : "#34d39e"
        }
      }, "\u2713"), partial && /*#__PURE__*/React.createElement("span", {
        "aria-label": `ミス残り${m.length}問`,
        style: {
          minWidth: 16,
          height: 16,
          padding: "0 4px",
          boxSizing: "border-box",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 99,
          fontSize: 10,
          fontWeight: 900,
          lineHeight: 1,
          color: cur ? "#0e1420" : "#f6c247",
          background: cur ? "#f6c247" : "#3a2f0e",
          border: `1px solid ${cur ? "#f6c247" : "#f6c24766"}`
        }
      }, m.length));
    })), /*#__PURE__*/React.createElement("div", {
      className: "card-in",
      style: {
        marginTop: 14
      }
    }, chunkQs.map(q => /*#__PURE__*/React.createElement(StudyCard, {
      key: q.id,
      q: q,
      mono: mono,
      flagged: !!flaggedIds[q.id],
      onToggleFlag: () => toggleFlag(q.id)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 30,
        pointerEvents: "none",
        padding: "16px 16px calc(16px + env(safe-area-inset-bottom))",
        background: "linear-gradient(180deg, transparent, #0d1117 34%)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: "0 auto",
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, ((studyProgress[secIdx] || {})[studyChunk] || []).length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: startChunkMisses,
      style: {
        width: "100%",
        padding: "12px",
        fontSize: 15,
        fontWeight: 800,
        borderRadius: 13,
        cursor: "pointer",
        color: "#ffe9b8",
        border: "1px solid #f6c24766",
        background: "linear-gradient(180deg,#2a2410,#1c1808)"
      }
    }, "\uD83D\uDD01 \u30DF\u30B9\u306B\u6311\u6226\uFF08", ((studyProgress[secIdx] || {})[studyChunk] || []).length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
      onClick: startChunkQuiz,
      style: {
        width: "100%",
        padding: "17px",
        fontSize: 18,
        fontWeight: 900,
        border: "none",
        borderRadius: 16,
        cursor: "pointer",
        color: "#10141c",
        background: "linear-gradient(90deg,#34d39e,#8ef0cf)",
        boxShadow: "0 6px 26px #34d39e55"
      }
    }, "\u26A1 \u3053\u306E", chunkQs.length, "\u554F\u3092\u30C6\u30B9\u30C8"))));
  }

  // ════════════════ TEST（テスト/暗記内チェック 共通ランナー） ════════════════
  if (screen === "test") {
    const q = testQueue[testPos];
    if (!q) return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag);
    const qTotal = testQueue.length;
    const isSection = testMode === "section";
    const isReview = testMode === "review";
    const isRandom = testMode === "random";
    const isExam = testMode === "exam";
    const isExamMiss = testMode === "exammiss";
    const isFlagged = testMode === "flagged";
    const runTitle = isSection ? `${sectionLabels[secIdx]} テスト` : isExam ? "🎯 総合テスト（模試）" : isExamMiss ? "🔁 総合テストの覚え直し" : isFlagged ? "🔖 要復習に挑戦" : isReview ? "🔁 間違えた問題に挑戦" : isRandom ? `🎲 ${randomLabel} ランダム` : `第${studyChunk + 1}セット チェック`;
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
        opacity: 0.75
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (isRandom) openBlockRandom();else if (isSection || isReview || isExam || isExamMiss || isFlagged) setScreen("home");else {
          setStudySub("learn");
          setScreen("study");
        }
      },
      style: {
        background: "none",
        border: "none",
        color: "#8b97a8",
        cursor: "pointer",
        fontSize: 13
      }
    }, "\u2190 \u4E2D\u65AD"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, runTitle), /*#__PURE__*/React.createElement("span", null, testPos + 1, " / ", qTotal)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "#1a2230",
        borderRadius: 99,
        overflow: "hidden",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${testPos / qTotal * 100}%`,
        height: "100%",
        background: "linear-gradient(90deg,#5b9bff,#34d39e)",
        transition: "width .3s"
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => toggleFlag(q.id),
      "aria-pressed": !!flaggedIds[q.id],
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        width: "100%",
        marginTop: 12,
        padding: "11px 0",
        borderRadius: 12,
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 800,
        transition: "background .15s, border-color .15s, box-shadow .15s",
        background: flaggedIds[q.id] ? "linear-gradient(90deg,#e0a830,#f6c247)" : "#161d28",
        border: `1.5px solid ${flaggedIds[q.id] ? "#f6c247" : "#3a4658"}`,
        color: flaggedIds[q.id] ? "#241a05" : "#c2cad8",
        boxShadow: flaggedIds[q.id] ? "0 0 16px #f6c24755" : "none"
      }
    }, flaggedIds[q.id] ? "🔖 要復習に登録中（押して解除）" : "🔖 要復習に追加する"), /*#__PURE__*/React.createElement("div", {
      className: phase === "reveal" && !lastOk ? "shake" : "",
      style: {
        marginTop: 16,
        background: "linear-gradient(180deg,#1b2330,#141a24)",
        border: `1.5px solid ${phase === "reveal" ? lastOk ? "#2faf86" : "#d9636e" : "#2a3543"}`,
        borderRadius: 18,
        padding: "22px 20px",
        boxShadow: phase === "reveal" && !lastOk ? `0 0 12px #d9636e1c` : "none",
        transition: "border-color .2s, box-shadow .2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        fontSize: 11,
        opacity: 0.5
      }
    }, /*#__PURE__*/React.createElement("span", null, "#", q.id, "\u30FB", q.source), /*#__PURE__*/React.createElement("span", null, q.type === "fill" ? "記述で入力" : q.type === "multi" ? `${q.selectCount}つ選ぶ` : "1つ選ぶ")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1.65,
        whiteSpace: "pre-wrap"
      }
    }, q.question), phase === "reveal" && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        borderTop: "1px solid #2a3543",
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 900,
        marginBottom: 10,
        color: lastOk ? "#34d39e" : "#ff6b6b"
      }
    }, lastOk ? "✓ 正解" : "✕ 不正解"), q.type !== "fill" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, q.choices.map(c => {
      const correct = q.answer.includes(c.label);
      const picked = Array.isArray(lastInput) && lastInput.includes(c.label);
      const k = q.answer.indexOf(c.label);
      const hint = k >= 0 && q.answerHints && q.answerHints[k] ? [q.answerHints[k]] : [];
      return /*#__PURE__*/React.createElement("div", {
        key: c.label,
        style: {
          display: "flex",
          gap: 10,
          alignItems: "baseline",
          padding: "8px 11px",
          borderRadius: 9,
          background: correct ? "#14271f" : "transparent",
          border: `1px solid ${correct ? "#34d39e66" : picked ? "#ff6b6b66" : "#232d3b"}`
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 800,
          minWidth: 14,
          textAlign: "center",
          color: correct ? "#34d39e" : picked ? "#ff8a8a" : "#555"
        }
      }, c.label), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15,
          fontFamily: mono,
          lineHeight: 1.5,
          flex: 1,
          color: correct ? "#eceff4" : "#8b97a8"
        }
      }, correct ? /*#__PURE__*/React.createElement(Highlight, {
        text: c.text,
        keys: hint,
        color: "#f6c247",
        on: true,
        variant: "marker"
      }) : c.text), picked && !correct && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          color: "#ff8a8a",
          whiteSpace: "nowrap"
        }
      }, "\u3042\u306A\u305F\u306E\u56DE\u7B54"));
    })) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        opacity: 0.5,
        marginBottom: 4
      }
    }, "\u7B54\u3048"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        color: "#eceff4",
        lineHeight: 1.6,
        fontFamily: mono
      }
    }, (q.answerTexts && q.answerTexts.length ? q.answerTexts : q.answer).map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement(Highlight, {
      text: t,
      keys: q.answerHints && q.answerHints[i] ? [q.answerHints[i]] : [],
      color: "#f6c247",
      on: true,
      variant: "marker"
    })))), !lastOk && lastInput ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#ff8a8a",
        marginTop: 6
      }
    }, "\u3042\u306A\u305F\u306E\u56DE\u7B54: ", String(lastInput)) : null), q.mnemonic && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontSize: 13,
        color: "#ffd27a",
        background: "#2a2410",
        border: "1px solid #4a3f14",
        borderRadius: 10,
        padding: "8px 12px",
        lineHeight: 1.6
      }
    }, "\uD83D\uDCA1 ", q.mnemonic))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, phase === "answer" ? /*#__PURE__*/React.createElement(React.Fragment, null, q.type === "single" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, q.choices.map((c, i) => /*#__PURE__*/React.createElement("button", {
      key: c.label,
      className: "choice",
      onMouseDown: e => e.preventDefault(),
      onClick: () => submitAnswer([c.label]),
      onMouseEnter: () => setCursor(i),
      style: {
        ...choiceRow("#1b2330", "#2a3543"),
        ...(i === cursor ? {
          boxShadow: "inset 0 0 0 2px #8ef0cf"
        } : {})
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        opacity: 0.3,
        minWidth: 16,
        textAlign: "center"
      }
    }, c.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontFamily: mono,
        lineHeight: 1.5
      }
    }, c.text))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        opacity: 0.4,
        marginTop: 4,
        textAlign: "center"
      }
    }, "\u2191\u2193\u3067\u79FB\u52D5\u30FBEnter\u3067\u6C7A\u5B9A\uFF08A\u301CE\u30AD\u30FC\u3067\u3082\u5373\u6C7A\uFF09")), q.type === "multi" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, q.choices.map((c, i) => {
      const on = multiSel.includes(c.label);
      return /*#__PURE__*/React.createElement("button", {
        key: c.label,
        className: "choice",
        onMouseDown: e => e.preventDefault(),
        onMouseEnter: () => setCursor(i),
        onClick: () => setMultiSel(s => on ? s.filter(x => x !== c.label) : [...s, c.label]),
        style: {
          ...choiceRow(on ? "#2a3f6e" : "#1b2330", on ? "#5b9bff" : "#2a3543"),
          ...(i === cursor ? {
            boxShadow: "inset 0 0 0 2px #8ef0cf"
          } : {})
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16,
          fontWeight: 900,
          color: on ? "#5b9bff" : "#444",
          minWidth: 22,
          textAlign: "center"
        }
      }, on ? "✓" : "○"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16,
          fontFamily: mono,
          lineHeight: 1.5
        }
      }, c.text));
    })), /*#__PURE__*/React.createElement("button", {
      onMouseDown: e => e.preventDefault(),
      onMouseEnter: () => setCursor(q.choices.length),
      onClick: () => multiSel.length && submitAnswer(multiSel),
      disabled: !multiSel.length,
      style: {
        ...primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)"),
        width: "100%",
        marginTop: 10,
        opacity: multiSel.length ? 1 : 0.4,
        ...(cursor === q.choices.length ? {
          boxShadow: "inset 0 0 0 2px #8ef0cf"
        } : {})
      }
    }, "\u6C7A\u5B9A\uFF08", multiSel.length, "/", q.selectCount, "\uFF09"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        opacity: 0.4,
        marginTop: 6,
        textAlign: "center"
      }
    }, "\u2191\u2193\u3067\u79FB\u52D5\u30FBEnter\u3067\u9078\u629E\uFF0F\u6C7A\u5B9A\u30DC\u30BF\u30F3\u307E\u3067\u52D5\u304B\u3057\u3066Enter\u3067\u56DE\u7B54")), q.type === "fill" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: fillVal,
      onChange: e => setFillVal(e.target.value),
      onKeyDown: e => {
        if (e.key === "Enter" && fillVal.trim()) {
          e.preventDefault();
          e.stopPropagation();
          submitAnswer(fillVal);
        }
      },
      placeholder: "\u7B54\u3048\u3092\u5165\u529B",
      spellCheck: false,
      autoFocus: true,
      style: {
        flex: 1,
        padding: "14px 16px",
        background: "#1b2330",
        color: "#eceff4",
        border: "1px solid #2a3543",
        borderRadius: 12,
        fontFamily: mono,
        fontSize: 16,
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => fillVal.trim() && submitAnswer(fillVal),
      style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
    }, "\u6C7A\u5B9A"))) : isCram(testMode) && !lastOk ?
    /*#__PURE__*/
    /* 覚えるモード系（暗記10問／ランダム演習／総合の覚え直し）で不正解のときは「次へ」を出さず、正解するまで「もう一度チャレンジ」だけ（採点は最初の不正解のまま）。学習動線の制御。 */
    React.createElement("button", {
      onClick: retryQuestion,
      style: {
        width: "100%",
        padding: "13px",
        fontSize: 15,
        fontWeight: 800,
        border: "1px solid #3f6aa8",
        borderRadius: 12,
        cursor: "pointer",
        color: "#dbe8ff",
        background: "linear-gradient(180deg,#27406b,#1d3052)"
      }
    }, "\uD83D\uDD01 \u3082\u3046\u4E00\u5EA6\u30C1\u30E3\u30EC\u30F3\u30B8\uFF08Enter\uFF09") :
    /*#__PURE__*/
    /* 次へは主張を抑える（彩度/サイズを下げ、問題文と黄マーカーが一番目立つように） */
    React.createElement("button", {
      onClick: nextTest,
      style: {
        width: "100%",
        padding: "13px",
        fontSize: 15,
        fontWeight: 800,
        border: "1px solid #2f7a66",
        borderRadius: 12,
        cursor: "pointer",
        color: "#dff5ec",
        background: "linear-gradient(180deg,#235d4d,#1b463b)"
      }
    }, testPos + 1 >= qTotal ? isSection ? "結果を見る（Enter）" : "採点する（Enter）" : "次へ →（Enter）"))));
  }

  // ════════════════ RESULT（結果） ════════════════
  if (screen === "result") {
    const s = lastScore || {
      correct: 0,
      total: 0,
      pct: 0,
      badge: false
    };
    if (s.exam) {
      // 総合テスト（模試）の結果
      const need = Math.max(0, EXAM_PASS - s.correct);
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 30
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83C\uDFAF \u7DCF\u5408\u30C6\u30B9\u30C8\uFF08\u6A21\u8A66\uFF09\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: s.pass ? s.gold ? "#f6c247" : "#34d39e" : "#c2cad8",
          textShadow: s.pass ? s.gold ? "0 0 30px #f6c24766" : "0 0 28px #34d39e55" : "none"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 24,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3\uFF08", s.pct, "%\uFF09\u30FB\u5408\u683C\u30E9\u30A4\u30F3 ", EXAM_PASS, "\u554F"), s.pass ? /*#__PURE__*/React.createElement("div", {
        className: "card-in",
        style: {
          marginTop: 18
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 46
        }
      }, s.gold ? "🥇" : "🏅"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 18,
          fontWeight: 900,
          color: s.gold ? "#f6c247" : "#34d39e",
          marginTop: 2
        }
      }, s.gold ? "金の修了バッジ獲得！" : "合格・修了バッジ獲得！"), s.gold && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          opacity: 0.75,
          marginTop: 4
        }
      }, EXAM_GOLD, "\u554F\u4EE5\u4E0A\u306E\u8C6A\u83EF\u30D0\u30C3\u30B8 \u2728")) : /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 18
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 20,
          fontWeight: 900,
          color: "#f6c247"
        }
      }, "\u4E0D\u5408\u683C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          opacity: 0.6,
          marginTop: 6,
          lineHeight: 1.7
        }
      }, "\u3042\u3068", need, "\u554F\u3067\u5408\u683C\uFF08", EXAM_PASS, "\u554F\uFF1D7\u5272\uFF09\u3002")), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 22,
          padding: "14px",
          borderRadius: 13,
          background: "#141b26",
          border: "1px solid #232d3b"
        }
      }, examStrip(28), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          marginTop: 9,
          color: examMastered ? "#f6c247" : examComplete ? "#34d39e" : "#8794a6"
        }
      }, examMastered ? "🎉 完全制覇！" : `修了バッジ ${examSlots.length} / ${EXAM_SLOTS}`)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 24
        }
      }, s.missed && s.missed.length > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: () => startExamMisses(s.missed),
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\uD83D\uDD01 \u9593\u9055\u3048\u305F\u554F\u984C\u3092\u899A\u3048\u308B\uFF08", s.missed.length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
        onClick: startExam,
        style: primaryBtn("linear-gradient(90deg,#5ee0b4,#34d39e)")
      }, "\uD83C\uDFAF \u3082\u3046\u4E00\u5EA6 \u7DCF\u5408\u30C6\u30B9\u30C8"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.exammiss) {
      // 総合テストの覚え直し結果（正解するまで繰り返した後、まだ残るミス）
      const remain = s.missed ? s.missed.length : 0;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83D\uDD01 \u899A\u3048\u76F4\u3057\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 60,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          marginTop: 18,
          lineHeight: 1.7,
          color: remain === 0 ? "#34d39e" : "#c2cad8"
        }
      }, remain === 0 ? "🎉 全部覚えた！" : `残り ${remain}問`), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, remain > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: () => startExamMisses(s.missed),
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\u3082\u3046\u4E00\u5EA6 \u9593\u9055\u3048\u305F\u554F\u984C\u3092\u899A\u3048\u308B"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.review) {
      // 間違えた問題の復習結果
      const remain = wrongList.length;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83D\uDD01 \u5FA9\u7FD2\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 60,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          marginTop: 18,
          lineHeight: 1.7,
          color: remain === 0 ? "#34d39e" : "#c2cad8"
        }
      }, remain === 0 ? "🎉 苦手をすべてクリア！" : `残り苦手 ${remain}問`), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, remain > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: startReview,
        style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
      }, "\u3082\u3046\u4E00\u5EA6 \u9593\u9055\u3048\u305F\u554F\u984C\u306B\u6311\u6226"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.flagged) {
      // 要復習フラグの挑戦結果（フラグは正解しても外れない＝残り数はflaggedListそのもの）
      const remain = flaggedList.length;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83D\uDD16 \u8981\u5FA9\u7FD2\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 60,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: "#34d39e"
        }
      }, s.correct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 22,
          opacity: 0.7
        }
      }, " / ", s.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, "\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          marginTop: 18,
          lineHeight: 1.7,
          color: remain === 0 ? "#34d39e" : "#c2cad8"
        }
      }, remain === 0 ? "🎉 要復習が0問に！" : `要復習に残っている問題 ${remain}問`), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          opacity: 0.5,
          marginTop: 6,
          lineHeight: 1.7
        }
      }, "\u6B63\u89E3\u3057\u3066\u3082\uD83D\uDD16\u306F\u81EA\u52D5\u3067\u5916\u308C\u307E\u305B\u3093\u3002\u89E3\u8AAC\u753B\u9762\u306E\uD83D\uDD16\u30DC\u30BF\u30F3\u3067\u624B\u52D5\u3067\u5916\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, remain > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: startFlagged,
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\u3082\u3046\u4E00\u5EA6 \u8981\u5FA9\u7FD2\u306B\u6311\u6226"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    if (s.random) {
      // ランダム演習の結果（バッジ無し）
      const pass = s.pct >= PASS_PCT;
      return /*#__PURE__*/React.createElement("div", {
        style: wrap
      }, styleTag, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          paddingTop: 34
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          letterSpacing: 3,
          opacity: 0.6
        }
      }, "\uD83C\uDFB2 ", s.label, " \u30E9\u30F3\u30C0\u30E0\u306E\u7D50\u679C"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "10px 0 0",
          color: pass ? "#34d39e" : "#c2cad8",
          textShadow: pass ? "0 0 28px #34d39e55" : "none"
        }
      }, s.pct, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 26
        }
      }, "%")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          opacity: 0.6,
          marginTop: 2
        }
      }, s.correct, " / ", s.total, " \u554F\u6B63\u89E3"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 26
        }
      }, s.missed && s.missed.length > 0 && /*#__PURE__*/React.createElement("button", {
        onClick: () => startRandomMisses(s.missed),
        style: primaryBtn("linear-gradient(90deg,#e0a830,#f6c247)")
      }, "\uD83D\uDD01 \u3053\u306E\u6F14\u7FD2\u306E\u30DF\u30B9\u306B\u6311\u6226\uFF08", s.missed.length, "\u554F\uFF09"), /*#__PURE__*/React.createElement("button", {
        onClick: openBlockRandom,
        style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
      }, "\uD83C\uDFB2 \u3082\u3046\u4E00\u5EA6\u30E9\u30F3\u30C0\u30E0\uFF08\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076\uFF09"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("home"),
        style: ghostBtn
      }, "\u30DB\u30FC\u30E0\u3078"))));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, styleTag, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 460,
        width: "100%",
        textAlign: "center",
        paddingTop: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        letterSpacing: 4,
        opacity: 0.6
      }
    }, sectionLabels[secIdx], " \u7D50\u679C", s.full ? "" : "（範囲選択）"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 64,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: "10px 0 0",
        color: s.pass ? "#34d39e" : "#c2cad8",
        textShadow: s.pass ? "0 0 28px #34d39e55" : "none"
      }
    }, s.pct, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 26
      }
    }, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        opacity: 0.6,
        marginTop: 2
      }
    }, s.correct, " / ", s.total, " \u554F\u6B63\u89E3"), s.badge ?
    /*#__PURE__*/
    /* ブロック全問を選択して合格＝🏅ブロック合格 */
    React.createElement("div", {
      className: "card-in",
      style: {
        fontSize: 44,
        marginTop: 18
      }
    }, "\uD83C\uDFC5", /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 900,
        color: "#34d39e",
        marginTop: 4
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u5408\u683C\uFF01")) : s.pass ?
    /*#__PURE__*/
    /* 合格ラインは超えたが、部分選択なのでブロック合格(🏅)ではない */
    React.createElement("div", {
      className: "card-in",
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 900,
        color: "#34d39e"
      }
    }, "\u2713 \u5408\u683C"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        opacity: 0.7,
        marginTop: 6,
        lineHeight: 1.7
      }
    }, "\u5168\u30C1\u30E3\u30F3\u30AF\u3092\u9078\u3093\u3067\u5408\u683C\u3059\u308B\u3068", /*#__PURE__*/React.createElement("br", null), "\u30D6\u30ED\u30C3\u30AF\u5408\u683C\uD83C\uDFC5\u306B\u306A\u308A\u307E\u3059\u3002")) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 900,
        color: "#f6c247"
      }
    }, "\u4E0D\u5408\u683C"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: 0.6,
        marginTop: 6,
        lineHeight: 1.7
      }
    }, "\u3042\u3068", Math.max(1, Math.ceil(s.total * PASS_PCT / 100) - s.correct), "\u554F\u3067\u5408\u683C\uFF08", PASS_PCT, "%\uFF09\u3002", /*#__PURE__*/React.createElement("br", null), "\u899A\u3048\u76F4\u3057\u3066\u3082\u3046\u4E00\u5EA6\u3002")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => openTestPick(secIdx),
      style: primaryBtn("linear-gradient(90deg,#5b9bff,#34d39e)")
    }, "\u3082\u3046\u4E00\u5EA6\u30C6\u30B9\u30C8"), /*#__PURE__*/React.createElement("button", {
      onClick: () => openStudy(secIdx),
      style: ghostBtn
    }, "\u899A\u3048\u76F4\u3059")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("home"),
      style: {
        ...linkBtn,
        marginTop: 18
      }
    }, "\u30D6\u30ED\u30C3\u30AF\u4E00\u89A7\u3078")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, styleTag);
}

// 小さめのカプセル型ボタン（セクション行の覚える/テスト）
function pill(c) {
  return {
    flex: "0 0 auto",
    background: "transparent",
    border: `1px solid ${c}66`,
    color: c,
    padding: "8px 13px",
    borderRadius: 99,
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap"
  };
}
const subBtn = {
  background: "transparent",
  border: "1px solid #2f3a49",
  color: "#c2cad8",
  padding: "9px 14px",
  borderRadius: 10,
  fontSize: 13,
  cursor: "pointer"
};
const linkBtn = {
  background: "none",
  border: "none",
  color: "#8b97a8",
  cursor: "pointer",
  fontSize: 12,
  padding: 0,
  textDecoration: "underline"
};
const ghostBtn = {
  padding: "16px 22px",
  fontSize: 15,
  fontWeight: 700,
  color: "#c2cad8",
  background: "transparent",
  border: "1px solid #2f3a49",
  borderRadius: 14,
  cursor: "pointer"
};
function primaryBtn(grad) {
  return {
    flex: 1,
    padding: "16px",
    fontSize: 16,
    fontWeight: 800,
    color: "#10141c",
    background: grad,
    border: "none",
    borderRadius: 14,
    cursor: "pointer",
    boxShadow: "0 0 22px #5b9bff44"
  };
}
function choiceRow(bg, bd) {
  return {
    display: "flex",
    alignItems: "center",
    gap: 14,
    textAlign: "left",
    padding: "16px 18px",
    background: bg,
    border: `2px solid ${bd}`,
    borderRadius: 16,
    cursor: "pointer",
    color: "#fff",
    transition: "transform .08s, background .15s, border .15s"
  };
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
