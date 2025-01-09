// Aqui estarão os dados que alimentarão os templates 
const itemCarrosselFilmesData = [
    {
        "img": "https://s3-alpha-sig.figma.com/img/3b35/41f3/9d9c59c690cd7ab661f821fff7e4c0da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTF0fK2zX0Ui995C1mK~2NWmaXmcsBWiv08SnW4SsGbFlhubGz6PNKJmKcvJP5tT6sG11j4PELZ8ofkVmWeEmnXULzdlYii2qAb~-SY~8anBpl-4te4xT6n4ou0u9YAhYByQN-3diPXi0wBuOq77TcdcgaGrZU1i-nLE7JYIJCa4bXx9qpC1mbwGP7RNcvQbJp9dQZ0QtNS9KFuBX5NHJUtYFNuBXf53oLTsUz6KjCjzuI5u1C-dF-SnyHuvGnGn8FZN71olYI0EAFygPMGvePcjlU~d-UYHTsuFFpRm6KlegsFOQcQm6MiITG-ttwRiNXqBrQkBvIIJCEFawD0bpA__"
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/eacc/8608/f7a5008970b2ad255a71959df0983dbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzJiaEWmP5XsteEx6-rTD0pbRW0vtwQyb-LzQsuZPYahb9W-sxdQhvGQKdJDQ1hy3FAJ1Wawk6BkKKVTvUoj8QU1t1q0D8OqkLP3PFOcrOmMpo~O~ZVO0JcXhLrf6NtvopIrE8QCplt60rcc7KcBHsHy-WA5Lc12Dtxx5y6luNt76vSS5-bGH65xy3tRqNQk80RkaZvOXCcQfRFzkVULhxaNxvtyE3vh1NgNvUzFd~hwDz7UgBqDUot11yoUqiikNY-oQRGwp2buFa0v1cYQL~U0RNtu584PGZjOOXLoSVYO6vDMxtcJu0PXfauz680rotM~C0woL-On0NeACi8zYg__",
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/3b35/41f3/9d9c59c690cd7ab661f821fff7e4c0da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTF0fK2zX0Ui995C1mK~2NWmaXmcsBWiv08SnW4SsGbFlhubGz6PNKJmKcvJP5tT6sG11j4PELZ8ofkVmWeEmnXULzdlYii2qAb~-SY~8anBpl-4te4xT6n4ou0u9YAhYByQN-3diPXi0wBuOq77TcdcgaGrZU1i-nLE7JYIJCa4bXx9qpC1mbwGP7RNcvQbJp9dQZ0QtNS9KFuBX5NHJUtYFNuBXf53oLTsUz6KjCjzuI5u1C-dF-SnyHuvGnGn8FZN71olYI0EAFygPMGvePcjlU~d-UYHTsuFFpRm6KlegsFOQcQm6MiITG-ttwRiNXqBrQkBvIIJCEFawD0bpA__"
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/eacc/8608/f7a5008970b2ad255a71959df0983dbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzJiaEWmP5XsteEx6-rTD0pbRW0vtwQyb-LzQsuZPYahb9W-sxdQhvGQKdJDQ1hy3FAJ1Wawk6BkKKVTvUoj8QU1t1q0D8OqkLP3PFOcrOmMpo~O~ZVO0JcXhLrf6NtvopIrE8QCplt60rcc7KcBHsHy-WA5Lc12Dtxx5y6luNt76vSS5-bGH65xy3tRqNQk80RkaZvOXCcQfRFzkVULhxaNxvtyE3vh1NgNvUzFd~hwDz7UgBqDUot11yoUqiikNY-oQRGwp2buFa0v1cYQL~U0RNtu584PGZjOOXLoSVYO6vDMxtcJu0PXfauz680rotM~C0woL-On0NeACi8zYg__",
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/3b35/41f3/9d9c59c690cd7ab661f821fff7e4c0da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTF0fK2zX0Ui995C1mK~2NWmaXmcsBWiv08SnW4SsGbFlhubGz6PNKJmKcvJP5tT6sG11j4PELZ8ofkVmWeEmnXULzdlYii2qAb~-SY~8anBpl-4te4xT6n4ou0u9YAhYByQN-3diPXi0wBuOq77TcdcgaGrZU1i-nLE7JYIJCa4bXx9qpC1mbwGP7RNcvQbJp9dQZ0QtNS9KFuBX5NHJUtYFNuBXf53oLTsUz6KjCjzuI5u1C-dF-SnyHuvGnGn8FZN71olYI0EAFygPMGvePcjlU~d-UYHTsuFFpRm6KlegsFOQcQm6MiITG-ttwRiNXqBrQkBvIIJCEFawD0bpA__"
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/eacc/8608/f7a5008970b2ad255a71959df0983dbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzJiaEWmP5XsteEx6-rTD0pbRW0vtwQyb-LzQsuZPYahb9W-sxdQhvGQKdJDQ1hy3FAJ1Wawk6BkKKVTvUoj8QU1t1q0D8OqkLP3PFOcrOmMpo~O~ZVO0JcXhLrf6NtvopIrE8QCplt60rcc7KcBHsHy-WA5Lc12Dtxx5y6luNt76vSS5-bGH65xy3tRqNQk80RkaZvOXCcQfRFzkVULhxaNxvtyE3vh1NgNvUzFd~hwDz7UgBqDUot11yoUqiikNY-oQRGwp2buFa0v1cYQL~U0RNtu584PGZjOOXLoSVYO6vDMxtcJu0PXfauz680rotM~C0woL-On0NeACi8zYg__",
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/3b35/41f3/9d9c59c690cd7ab661f821fff7e4c0da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTF0fK2zX0Ui995C1mK~2NWmaXmcsBWiv08SnW4SsGbFlhubGz6PNKJmKcvJP5tT6sG11j4PELZ8ofkVmWeEmnXULzdlYii2qAb~-SY~8anBpl-4te4xT6n4ou0u9YAhYByQN-3diPXi0wBuOq77TcdcgaGrZU1i-nLE7JYIJCa4bXx9qpC1mbwGP7RNcvQbJp9dQZ0QtNS9KFuBX5NHJUtYFNuBXf53oLTsUz6KjCjzuI5u1C-dF-SnyHuvGnGn8FZN71olYI0EAFygPMGvePcjlU~d-UYHTsuFFpRm6KlegsFOQcQm6MiITG-ttwRiNXqBrQkBvIIJCEFawD0bpA__"
    }
]

const itemCarrosselFilmesData2 = [
    {
        "img": "https://s3-alpha-sig.figma.com/img/eacc/8608/f7a5008970b2ad255a71959df0983dbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzJiaEWmP5XsteEx6-rTD0pbRW0vtwQyb-LzQsuZPYahb9W-sxdQhvGQKdJDQ1hy3FAJ1Wawk6BkKKVTvUoj8QU1t1q0D8OqkLP3PFOcrOmMpo~O~ZVO0JcXhLrf6NtvopIrE8QCplt60rcc7KcBHsHy-WA5Lc12Dtxx5y6luNt76vSS5-bGH65xy3tRqNQk80RkaZvOXCcQfRFzkVULhxaNxvtyE3vh1NgNvUzFd~hwDz7UgBqDUot11yoUqiikNY-oQRGwp2buFa0v1cYQL~U0RNtu584PGZjOOXLoSVYO6vDMxtcJu0PXfauz680rotM~C0woL-On0NeACi8zYg__",
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/3b35/41f3/9d9c59c690cd7ab661f821fff7e4c0da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTF0fK2zX0Ui995C1mK~2NWmaXmcsBWiv08SnW4SsGbFlhubGz6PNKJmKcvJP5tT6sG11j4PELZ8ofkVmWeEmnXULzdlYii2qAb~-SY~8anBpl-4te4xT6n4ou0u9YAhYByQN-3diPXi0wBuOq77TcdcgaGrZU1i-nLE7JYIJCa4bXx9qpC1mbwGP7RNcvQbJp9dQZ0QtNS9KFuBX5NHJUtYFNuBXf53oLTsUz6KjCjzuI5u1C-dF-SnyHuvGnGn8FZN71olYI0EAFygPMGvePcjlU~d-UYHTsuFFpRm6KlegsFOQcQm6MiITG-ttwRiNXqBrQkBvIIJCEFawD0bpA__"
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/eacc/8608/f7a5008970b2ad255a71959df0983dbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzJiaEWmP5XsteEx6-rTD0pbRW0vtwQyb-LzQsuZPYahb9W-sxdQhvGQKdJDQ1hy3FAJ1Wawk6BkKKVTvUoj8QU1t1q0D8OqkLP3PFOcrOmMpo~O~ZVO0JcXhLrf6NtvopIrE8QCplt60rcc7KcBHsHy-WA5Lc12Dtxx5y6luNt76vSS5-bGH65xy3tRqNQk80RkaZvOXCcQfRFzkVULhxaNxvtyE3vh1NgNvUzFd~hwDz7UgBqDUot11yoUqiikNY-oQRGwp2buFa0v1cYQL~U0RNtu584PGZjOOXLoSVYO6vDMxtcJu0PXfauz680rotM~C0woL-On0NeACi8zYg__",
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/3b35/41f3/9d9c59c690cd7ab661f821fff7e4c0da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTF0fK2zX0Ui995C1mK~2NWmaXmcsBWiv08SnW4SsGbFlhubGz6PNKJmKcvJP5tT6sG11j4PELZ8ofkVmWeEmnXULzdlYii2qAb~-SY~8anBpl-4te4xT6n4ou0u9YAhYByQN-3diPXi0wBuOq77TcdcgaGrZU1i-nLE7JYIJCa4bXx9qpC1mbwGP7RNcvQbJp9dQZ0QtNS9KFuBX5NHJUtYFNuBXf53oLTsUz6KjCjzuI5u1C-dF-SnyHuvGnGn8FZN71olYI0EAFygPMGvePcjlU~d-UYHTsuFFpRm6KlegsFOQcQm6MiITG-ttwRiNXqBrQkBvIIJCEFawD0bpA__"
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/eacc/8608/f7a5008970b2ad255a71959df0983dbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzJiaEWmP5XsteEx6-rTD0pbRW0vtwQyb-LzQsuZPYahb9W-sxdQhvGQKdJDQ1hy3FAJ1Wawk6BkKKVTvUoj8QU1t1q0D8OqkLP3PFOcrOmMpo~O~ZVO0JcXhLrf6NtvopIrE8QCplt60rcc7KcBHsHy-WA5Lc12Dtxx5y6luNt76vSS5-bGH65xy3tRqNQk80RkaZvOXCcQfRFzkVULhxaNxvtyE3vh1NgNvUzFd~hwDz7UgBqDUot11yoUqiikNY-oQRGwp2buFa0v1cYQL~U0RNtu584PGZjOOXLoSVYO6vDMxtcJu0PXfauz680rotM~C0woL-On0NeACi8zYg__",
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/3b35/41f3/9d9c59c690cd7ab661f821fff7e4c0da?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTF0fK2zX0Ui995C1mK~2NWmaXmcsBWiv08SnW4SsGbFlhubGz6PNKJmKcvJP5tT6sG11j4PELZ8ofkVmWeEmnXULzdlYii2qAb~-SY~8anBpl-4te4xT6n4ou0u9YAhYByQN-3diPXi0wBuOq77TcdcgaGrZU1i-nLE7JYIJCa4bXx9qpC1mbwGP7RNcvQbJp9dQZ0QtNS9KFuBX5NHJUtYFNuBXf53oLTsUz6KjCjzuI5u1C-dF-SnyHuvGnGn8FZN71olYI0EAFygPMGvePcjlU~d-UYHTsuFFpRm6KlegsFOQcQm6MiITG-ttwRiNXqBrQkBvIIJCEFawD0bpA__"
    },
    {
        "img": "https://s3-alpha-sig.figma.com/img/eacc/8608/f7a5008970b2ad255a71959df0983dbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzJiaEWmP5XsteEx6-rTD0pbRW0vtwQyb-LzQsuZPYahb9W-sxdQhvGQKdJDQ1hy3FAJ1Wawk6BkKKVTvUoj8QU1t1q0D8OqkLP3PFOcrOmMpo~O~ZVO0JcXhLrf6NtvopIrE8QCplt60rcc7KcBHsHy-WA5Lc12Dtxx5y6luNt76vSS5-bGH65xy3tRqNQk80RkaZvOXCcQfRFzkVULhxaNxvtyE3vh1NgNvUzFd~hwDz7UgBqDUot11yoUqiikNY-oQRGwp2buFa0v1cYQL~U0RNtu584PGZjOOXLoSVYO6vDMxtcJu0PXfauz680rotM~C0woL-On0NeACi8zYg__",
    }
]

// Exporte todos os datas
export { itemCarrosselFilmesData, itemCarrosselFilmesData2 }