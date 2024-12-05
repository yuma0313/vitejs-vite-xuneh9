'use strict';

const common = {
	save: "Save",
	width: "Width",
	height: "Height",
	"export": "Export",
	background: "背景",
	backgroundColor: "フォントの背景色",
	addMedia: "アップロード",
	text: "テキスト",
	font: "フォントの種類",
	size: "サイズ",
	color: "フォントカラー",
	style: "スタイル",
	alignment: "配置",
	addSubtitle: "サブタイトルを追加",
	Download: "ダウンロード",
	preparingWorkspace: "ワークスペースを準備中"
};
const resolutions = {
	youtube: "YouTube (16:9)",
	instagram: "Instagram (1:1)",
	twitter: "Twitter (2:1)",
	tiktok: "TikTok (9:16)",
	custom: "Custom resolution"
};
const sidebar = {
	tabs: {
		media: "動画・画像",
		text: "Text",
		stock: "Stock",
		filters: "Filters",
		transitions: "Transitions",
		subtitles: "Subtitles"
	},
	mediaTab: {
		emptyCollectionTitle: "アップロードされたファイルはありません。"
	},
	textTab: {
		title: "テキスト",
		titles: "テキストアニメ"
	},
	stockTab: {
		images: "Images",
		videos: "Videos",
		gifs: "GIFs",
		stickers: "Stickers"
	},
	filtersTab: {
		effects: "Effects"
	},
	subtitlesTab: {
		"import": {
			title: "Import SRT file",
			description: "Upload an srt file containing subtitles"
		},
		create: {
			title: "Add manually",
			description: "Create subtitles manually"
		},
		styles: {
			title: "Styles",
			mode: "Mode",
			animations: "Animations",
			styles: "Styles"
		}
	}
};
const render = {
	rendering: {
		title: "動画データの処理中です。",
		description: "処理が完了するまでしばらくお待ちください。"
	},
	success: {
		title: "動画の処理が完了しました。",
		description: "作成された動画データのダウンロードを行ってください。"
	},
	error: {
		title: "エラーが発生しました。",
		description: "エラーの内容をお知らせください。"
	}
};
const missingConfiguration = {
	title: "このブラウザはサポートされていません。",
	description: "最終的な動画の処理はこのブラウザでは行えません。Google Chromeを使用してください。"
};
const en = {
	common: common,
	resolutions: resolutions,
	sidebar: sidebar,
	render: render,
	missingConfiguration: missingConfiguration
};

function t(keyPath, defaultValue = "") {
    const keys = keyPath.split(".");
    let result = en;
    for (const key of keys) {
        if (result && key in result) {
            result = result[key];
        }
        else {
            return defaultValue;
        }
    }
    return typeof result === "string" ? result : defaultValue;
}

exports.t = t;
